const fs = require('fs');
const path = require('path');
const chineseS2T = require('chinese-s2t');


// 要轉換的文件路徑，可以根據需要修改
const filesToConvert = [
    '../locales/zh-CN.json'
    // 添加其他需要轉換的文件路徑
];

function convertFile(filePath) {
    const absolutePath = path.resolve(__dirname, filePath);
    console.log(`Converting ${absolutePath}...`);
    
    try {
        const content = fs.readFileSync(absolutePath, 'utf8');
        const simplified = chineseS2T.t2s(content);
        
        // 寫入簡體版本
        fs.writeFileSync(absolutePath, simplified);
        
        // 創建備份
        fs.writeFileSync(absolutePath.replace(/\.json$/, '.bak'), content);
        
        console.log(`Successfully converted ${filePath}`);
    } catch (error) {
        console.error(`Error converting ${filePath}:`, error);
    }
}

// 轉換所有文件
filesToConvert.forEach(convertFile);