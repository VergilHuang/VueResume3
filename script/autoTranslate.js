const fs = require('fs');
const path = require('path');
const { Translate } = require('@google-cloud/translate').v2;

// 初始化Google Translate API
// 注意：需要設置GOOGLE_APPLICATION_CREDENTIALS環境變量，指向你的Google API憑證JSON檔案
const translate = new Translate({key: 'AIzaSyAM4WV2CHJ7W8IC4c-MFgpcsCK5E77r6hM'});

const LOCALES_DIR = path.join(__dirname, '../locales');
const SOURCE_LANG = 'zh-CN';
const TARGET_LANGS = ['en', 'bn', 'th', 'ko'];

/**
 * 獲取對象中所有路徑及其值的映射
 * @param {Object} obj - 輸入對象
 * @param {string} prefix - 路徑前綴
 * @returns {Object} - 路徑到值的映射
 */
function flattenObject(obj, prefix = '') {
  const result = {};
  
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // 遞迴處理嵌套對象
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  
  return result;
}

/**
 * 根據路徑獲取對象中的值
 * @param {Object} obj - 輸入對象
 * @param {string} path - 點分隔路徑
 * @returns {*} - 對應路徑的值，如果路徑不存在則返回undefined
 */
// function getValueByPath(obj, path) {
//   const parts = path.split('.');
//   let current = obj;
  
//   for (const part of parts) {
//     if (current === undefined || current === null) return undefined;
//     current = current[part];
//   }
  
//   return current;
// }

/**
 * 根據路徑設置對象中的值
 * @param {Object} obj - 要修改的對象
 * @param {string} path - 點分隔路徑
 * @param {*} value - 要設置的值
 * @returns {Object} - 修改後的對象
 */
function setValueByPath(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current) || typeof current[part] !== 'object') {
      current[part] = {};
    }
    current = current[part];
  }
  
  current[parts[parts.length - 1]] = value;
  return obj;
}

/**
 * 找出目標對象中缺少的路徑
 * @param {Object} sourceFlat - 扁平化的源對象
 * @param {Object} targetFlat - 扁平化的目標對象
 * @returns {Object} - 缺失路徑及其對應的源值的映射
 */
function findMissingPaths(sourceFlat, targetFlat) {
  const missingPaths = {};
  
  for (const path in sourceFlat) {
    if (!(path in targetFlat) || targetFlat[path] === '') {
      missingPaths[path] = sourceFlat[path];
    }
  }
  
  return missingPaths;
}

/**
 * 批量翻譯字符串
 * @param {Object} stringsToTranslate - 路徑到字符串的映射
 * @param {string} targetLang - 目標語言代碼
 * @returns {Promise<Object>} - 路徑到翻譯後字符串的映射
 */
async function translateStrings(stringsToTranslate, targetLang) {
  const translations = {};
  const paths = Object.keys(stringsToTranslate);
  
  if (paths.length === 0) {
    return translations;
  }
  
  console.log(`需要翻譯 ${paths.length} 個字符串到 ${targetLang}`);
  
  // 將路徑分成小批次進行處理，每批最多20個項目
  const batchSize = 20;
  for (let i = 0; i < paths.length; i += batchSize) {
    const batch = paths.slice(i, i + batchSize);
    const batchValues = batch.map(path => stringsToTranslate[path]);
    
    try {
      // 批量翻譯
      const [response] = await translate.translate(batchValues, {
        from: SOURCE_LANG,
        to: targetLang
      });
      
      // 將翻譯結果分配給相應路徑
      const translatedValues = Array.isArray(response) ? response : [response];
      batch.forEach((path, index) => {
        translations[path] = translatedValues[index];
      });
      
      console.log(`已完成批次翻譯 ${i + 1} 到 ${Math.min(i + batchSize, paths.length)} / ${paths.length}`);
      
      // 稍微暫停一下，避免API速率限制
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`批次翻譯失敗 (${i} - ${i + batch.length}): ${error.message}`);
      // 翻譯失敗時，為該批次的所有項目保留原文
      batch.forEach(path => {
        translations[path] = stringsToTranslate[path];
      });
    }
  }
  
  return translations;
}

/**
 * 主要翻譯函數
 */
async function translateLocales() {
  try {
    // 讀取源語言文件
    const sourcePath = path.join(LOCALES_DIR, `${SOURCE_LANG}.json`);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`源語言文件不存在: ${sourcePath}`);
    }
    
    const sourceContent = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
    const sourceFlat = flattenObject(sourceContent);
    
    // 為每個目標語言進行翻譯
    for (const targetLang of TARGET_LANGS) {
      console.log(`處理 ${SOURCE_LANG} -> ${targetLang}...`);
      
      // 檢查目標語言文件是否存在
      const targetPath = path.join(LOCALES_DIR, `${targetLang}.json`);
      let targetContent = {};
      
      if (fs.existsSync(targetPath)) {
        try {
          targetContent = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        } catch (error) {
          console.warn(`無法解析現有的翻譯文件 ${targetPath}: ${error.message}`);
        }
      }
      
      const targetFlat = flattenObject(targetContent);
      
      // 找出缺少的路徑
      const missingPaths = findMissingPaths(sourceFlat, targetFlat);
      const missingPathsCount = Object.keys(missingPaths).length;
      
      if (missingPathsCount === 0) {
        console.log(`${targetLang} 沒有缺少的翻譯，跳過`);
        continue;
      }
      
      console.log(`${targetLang} 缺少 ${missingPathsCount} 個翻譯`);
      
      // 僅翻譯缺少的字符串
      const translatedStrings = await translateStrings(missingPaths, targetLang);
      
      // 將翻譯結果合併到目標對象
      let updatedTargetContent = { ...targetContent };
      for (const path in translatedStrings) {
        updatedTargetContent = setValueByPath(
          updatedTargetContent, 
          path, 
          translatedStrings[path]
        );
      }
      
      // 寫入文件
      fs.writeFileSync(
        targetPath, 
        JSON.stringify(updatedTargetContent, null, 2), 
        'utf8'
      );
      
      console.log(`已將 ${Object.keys(translatedStrings).length} 個翻譯添加到 ${targetPath}`);
    }
    
    console.log('所有翻譯任務已完成！');
  } catch (error) {
    console.error(`翻譯過程發生錯誤: ${error.message}`);
    process.exit(1);
  }
}

// 執行翻譯
translateLocales();