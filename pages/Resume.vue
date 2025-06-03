<script setup>
const tags = [
  [
    "jQuery",
    "Bootstrap3",
    "W3CSS",
    "SASS",
    "Gulp",
    "ChartJS",
    "JSP",
    "Java",
    "Tomcat",
    "animateCSS",
    "a11y",
    "Git",
  ],
  [
    "React",
    "React-router",
    "Redux",
    "React-saga",
    "Typescript",
    "Ant Design",
    "Webpack4",
    "Storybook",
    "Git",
    "Genkins",
    "eslint",
    "prettier",
  ],
  [
    "Vue",
    "Vue-router",
    "Vuex",
    "Typescript",
    "Element UI",
    "Vant UI",
    "Webpack4",
    "GitLab-CI/CD",
    "Git",
    "eslint",
    "prettier",
  ],
  [
    "Vue3",
    "Vue-router",
    "Vuex",
    "Typescript",
    "Element UI",
    "React",
    "React-router",
    "Redux",
    "Ant Design",
    "Webpack",
    "Git",
    "tailwindcss",
    "fontawesome",
    "husky",
    "eslint",
    "prettier",
  ],
  [
    "Nuxt2",
    "Vuex",
    "Element UI",
    "Webpack",
    "Gitlab Flow",
    "animejs",
    "nuxt-i18n",
    "tailwindcss",
    "fontawesome",
    "iconify",
    "husky",
    "eslint",
    "prettier",
    "Canva",
    "Cursor",
    "Google Cloud Translate API",
    "OpenAI",
  ],
];
</script>

<template>
  <div class="resume">
    <section>
      <h1>Resume</h1>
      <div class="history">
        <div class="tl-box">
          <div class="tl-icon">
            <Icon name="bx:bxs-briefcase-alt-2" size="24" />
          </div>
          <div id="h-w0">
            <span class="tl-title">Working History</span>
          </div>
          <div id="h-w5">
            <div class="h-c">
              <h5 class="h-t">
                通盈盛科技股份有限公司<span class="h-d">2022/9 ~ 2025/6</span>
              </h5>
              <h6 class="h-j">Front-End Team Lead</h6>
              <h6 class="h-b">
                全遠端團隊協作｜主導後台系統維護與重構｜多語系系統優化｜AI
                工具應用
              </h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    擔任 5 人前端團隊中的資深工程師，包含 3 位 Junior
                    成員，負責日常技術指導與部分 PR
                    審查，協助團隊維持程式品質與技術成長。
                  </li>
                  <li>
                    於需求分析階段經常扮演顧問角色，針對業務瓶頸提出多項技術解法，綜合業務限制後推薦最適合的技術實施方向。
                  </li>
                  <li>
                    主導後台系統開發與維護（由已離職員工開發的 Legacy
                    專案），重構多層次權限驗證機制，實作以 CRUD
                    權限為核心的操作權限與頁面可視控制機制。
                  </li>
                  <li>
                    強化後台使用者體驗，設計並實作類瀏覽器的多分頁（Tab）機制，支援拖曳切換、批次操作與頁籤超出螢幕寬度時的動態滑動處理（Stepper
                    Scroll）。
                  </li>
                  <li>
                    在無 UI 設計師資源情況下，利用 Canva
                    自製並修改設計稿，重新設計多個後台頁面以提升使用體驗與視覺一致性。
                  </li>
                  <li>
                    開發 AI 翻譯腳本，自動同步 en locale 檔案至其他語系，掛載於
                    Husky pre-commit 檢查流程，使用 OpenAI / Google Translate
                    API 進行即時翻譯，提升多語系維護效率與一致性。
                  </li>
                  <li>
                    為改善後端錯誤訊息的混亂問題(專案已經大到一個規模,沒有資源重新整理每個API的Error處理)，提出以
                    locale code 設定為依據，自動翻譯 error code
                    機制：將語系代碼存於 cookie
                    中，後端據此使用檢查資料庫Mapping,
                    若無資料則使用運端服務翻譯並儲存在資料庫,並回傳對應語言錯誤訊息，前端再根據錯誤代碼顯示本地化內容，顯著降低多國用戶的困惑與不滿。
                  </li>
                </ol>
                <Tag v-for="tag of tags[4]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w4">
            <div class="h-c">
              <h5 class="h-t">
                Royal Tech<span class="h-d">2021/7 ~ 2022/9</span>
              </h5>
              <h6 class="h-j">Senior Front-End Engineer</h6>
              <h6 class="h-b">
                Vue 3 / TypeScript｜跨系統資料整合平台開發｜跨文化溝通與協作
              </h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    在疫情期間於歐洲 Malta
                    工作，與來自多國的同事交流合作，拓展視野並培養跨文化溝通與協作能力。
                  </li>
                  <li>
                    工作模式以遠端為主，視需求偶爾進公司與團隊開會協調專案進度。
                  </li>
                  <li>
                    主要負責開發內部資料轉介平台，使用 Vue 3 + TypeScript
                    架構，實作跨系統資料整合流程，讓不同系統間的資料能定期整合推送、轉換並格式化為不同系統間接受的資料格式。平台包含大量表單處理、動態欄位配置與視覺化圖表分析功能。
                  </li>
                  <li>
                    協助主管進行不同團隊的專案品質審查，並提供改善建議與技術指導。
                  </li>
                  <li>
                    積極參與跨團隊技術支援，協助其他開發人員解決前端開發上的瓶頸與錯誤，促進整體開發效率與品質。
                  </li>
                </ol>
                <Tag v-for="tag of tags[3]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w3">
            <div class="h-c">
              <h5 class="h-t">
                鑫城商務有限公司<span class="h-d">2020/11 ~ 2021/4</span>
              </h5>
              <h6 class="h-j">Front-End Team Lead</h6>
              <h6 class="h-b">架構優化｜多入口重構｜團隊協作流程改善</h6>

              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    團隊共 4
                    位前端成員，日常積極進行技術交流與知識分享，推動整體技術成長。
                  </li>
                  <li>
                    依據業務需求調整 Webpack 架構，優化打包與部署流程，提升
                    CI/CD 流程效率與穩定性。
                  </li>
                  <li>
                    重構既有專案結構，將多版型專案拆分為多入口設計，並將可重複使用的
                    Model 與 Component 抽離封裝成共用
                    Libraries，降低耦合度、提升維護性與擴展性。
                  </li>
                  <li>
                    優化團隊開發流程，提升開發與部署效率，並促進團隊資訊透明化與溝通效率。
                  </li>
                  <li>
                    跨部門合作時，主動協助整合不同領域的思維模式，轉化業務或設計端的需求為具體的技術解法，有效推動專案持續前進。
                  </li>
                </ol>
                <Tag v-for="tag of tags[2]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w2">
            <div class="h-c">
              <h5 class="h-t">
                吉聯數位科技娛樂有限公司<span class="h-d">2019/4 ~ 2020/5</span>
              </h5>
              <h6 class="h-j">Front-End Team Lead</h6>
              <h6 class="h-b">架構重整｜技術選型｜跨團隊協作推進</h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    所屬前端團隊共 10 位成員，定期舉辦 Tech
                    Talk，促進團隊間技術交流與分享。
                  </li>
                  <li>
                    根據產品需求與長期技術發展目標，主導新技術選型與架構規劃，評估可行性並推動落地。
                  </li>
                  <li>
                    在多版型專案中抽象出共通模型（Model）、元件（Component）與介面（Interface），針對不同執行環境進行封裝與模組化設計，提升程式碼維護性與擴展性。
                  </li>
                  <li>
                    導入 TypeScript
                    建立嚴謹的資料結構定義，改善前後端介接效率，降低溝通成本，並透過靜態檢查強化型別約束與錯誤預防。
                  </li>
                  <li>
                    使用 Webpack 建立基於版型名稱的多入口專案架構，搭配 Jenkins
                    建置 CI/CD 自動化部署流程，提升交付穩定性與開發節奏。
                  </li>
                  <li>
                    優化團隊整體工作流程，協助團隊提升部署效率與資訊同步品質。
                  </li>
                  <li>
                    跨部門合作時，善於轉譯設計與業務語言為可實作的技術方案，確保項目高效推進與跨職能協作順暢。
                  </li>
                </ol>
                <Tag v-for="tag of tags[1]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w1">
            <div class="h-c">
              <h5 class="h-t">
                采聲科技股份有限公司 (ESound)
                <span class="h-d">2015/3 ~ 2018/4</span>
              </h5>
              <h6 class="h-j">Software Engineer</h6>

              <h6 class="h-b">
                市政系統網站開發｜a11y
                無障礙規範實作｜Bootstrap/W3CSS｜跨瀏覽器兼容性開發
              </h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    系統研發部門任職前端工程師，期間進修 SSCP
                    網路安全類別課程，強化資安觀念與實作意識。
                  </li>
                  <li>
                    以 Bootstrap 3 與 jQuery 開發桃園市市政信箱網站，前後端以
                    Java（Servlet）與 Tomcat 架構實作 API 串接，網站通過 a11y
                    無障礙 2A 等級驗證，日均瀏覽人次逾3000。
                  </li>
                  <li>
                    負責公司產品官網改版與視覺優化，透過 Bootstrap 3
                    將舊版網站重構，提升互動流暢度與資訊呈現效率。
                  </li>
                  <li>
                    以 W3CSS 開發社會局「身心障礙權利公約專區」網站，W3CSS 相較
                    Bootstrap 更輕量，有效縮短首次畫面渲染（First Contentful
                    Paint）時間。
                  </li>
                </ol>
                <h6 class="h-j">SBeacon 產品負責人｜IoT 裝置研發與推廣</h6>
                <h6 class="h-b">
                  藍牙硬體整合｜動態加密傳輸｜跨平台移動端開發｜政府合作推廣
                </h6>
                <div class="h-m">
                  <ol class="resume-list">
                    <li>
                      擔任自有 IoT 產品 SBeacon 負責人，帶領 3
                      人團隊（後端工程師、行動端工程師、UI
                      設計師），負責產品從技術研發到市場推廣的全流程管理。
                    </li>
                    <li>
                      親自實作 iOS 與 Android
                      應用程式開發，並成功上架雙平台，支援與藍牙裝置互動。
                    </li>
                    <li>
                      與硬體團隊協作，整合藍牙 4.0
                      模組，設計自有協議封包，並導入 AES-256
                      動態加密技術，確保傳輸安全性與設備可控性。
                    </li>
                    <li>
                      成功向中華電信與多個政府單位提案推廣，產品歷經兩年研發與場域驗證後交付，順利達成承接專案攤平成本的階段性任務。
                    </li>
                    <li>
                      在此專案中，深入了解跨領域整合（硬體 / 韌體 / 軟體 /
                      業務）的溝通技巧與專案管理能力。
                    </li>
                  </ol>
                </div>
              </div>
              <Tag v-for="tag of tags[0]" :key="tag">{{ tag }}</Tag>
            </div>
          </div>
          <!-- <div id="h-w3">
            <div class="h-c">
              <h5 class="h-t">興利股份有限公司 - 中國深圳市</h5>
              <h6 class="h-j">Industrial Production Planner</h6>
              <h6 class="h-d">2013 ~ 2014</h6>
              <p
                class="h-m"
              >役畢即在大陸深圳一家錫製品工廠擔任生產管理人員，主要是進口錫原料製成符合純度與環保規格的錫製品，從中負責訂定生產目標時程，減少生產中浪費與供應鏈管理。</p>
            </div>
          </div>-->
        </div>
        <!-- <div class="tl-box">
          <div class="tl-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div id="h-e0">
            <span class="tl-title">Education History</span>
          </div>
          <div id="h-e1">
            <div class="h-c">
              <h5 class="h-t">中原大學工業與系統工程系 (ISE)</h5>
              <h6 class="h-d">2008 ~ 2012</h6>
              <p class="h-m">
                大學期間修習了自動化倉儲系統、機器人邏輯設計與自走車程式設計。曾參加大學自走車交流比賽團體組第三名。在巨匠學習了半年的iOS
                &
                Android雙系統程式設計，以團隊的形式開發過一款生活風格類別APP。曾參與社會領導人學習營，並在其中擔任隊長完成一系列高壓課程。
              </p>
            </div>
          </div>
          <div id="h-e2">
            <div class="h-c">
              <h5 class="h-t">東莞台商子弟學校 (TBDS)</h5>
              <h6 class="h-d">2001 ~ 2008</h6>
              <p
                class="h-m"
              >在中國大陸就讀台商學校，是一所以英語學習為主的學校，在校期間以第二名優異成績畢業。曾獲得校長獎、董事長獎等榮譽獎項，也曾擔任兩岸交流媒介參與官方活動，到雲南地區愛心助學當地2位小朋友到高中畢業的學雜費。</p>
            </div>
          </div>
        </div>-->
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$tl_icon_width: 52px;
$h_line_height: 23rem;

.history {
  padding: 40px 10px;
  .tl-box {
    position: relative;
    width: 75%;
    // height: 800px;
    display: inline-block;
    margin: 0 3%;
    vertical-align: top;
    .tl-title {
      font-family: "Signika", serif;
      font-weight: 700;
      font-size: 1.4rem;
      position: absolute;
      left: 45px;
      top: -39px;
    }
    .tl-icon {
      width: $tl_icon_width;
      height: $tl_icon_width;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5069c3;
      color: white;
      font-size: 1.6rem;
      border-radius: 50%;

      .fa-briefcase {
        position: relative;
        left: 2px;
      }
    }
    .h-c {
      position: absolute;
      top: -12px;
      left: 18px;
      .h-t {
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        font-weight: 500;
        font-size: 1.35rem;
        color: #222;
      }
      .h-j {
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: #333;
      }
      .h-b {
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        font-size: 0.9rem;
        color: #5069c3;
      }
      .h-d {
        font-family: "Signika", serif;
        font-weight: 200;
        font-size: 0.92rem;
        color: #555;
        margin-left: 10px;
      }
      .h-m {
        font-size: 1rem;
        line-height: 1.6;
        color: #555;
        padding-top: 10px;

        .resume-list {
          list-style: disc;
          margin-left: 20px;
          li {
            font-size: 1.05rem;
            font-weight: 500;
            padding-bottom: 10px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}

div[id^="h-"] {
  margin-left: calc(#{$tl_icon_width} / 2);
  padding-left: 16px;
  border-left: 2px dashed #d8d8d8;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 2px solid #5069c3;
    position: relative;
    top: 99%;
    left: -22px;
    background: white;
    z-index: 1;
  }
}

#h-w0 {
  height: 5rem;
}
#h-w1 {
  height: 48rem;
}
#h-w2 {
  height: 40rem;
}
#h-w3 {
  height: 30rem;
}
#h-w4 {
  height: 34rem;
}
#h-w5 {
  height: 48rem;
}
#h-e0 {
  height: 5rem;
}
#h-e1 {
  height: 19rem;
}
#h-e2 {
  height: $h_line_height;
}
#h-e3 {
  height: $h_line_height;
}
@media screen and (max-width: 1300px) {
  #h-w1 {
    height: 29rem;
  }
  #h-w2 {
    height: 32rem;
  }
  #h-w3 {
    height: 35rem;
  }
  #h-e1 {
    height: 20rem;
  }
}
@media screen and (max-width: 1180px) {
  #h-w1 {
    height: 34rem;
  }
  #h-w2 {
    height: 39rem;
  }
  #h-w3 {
    height: 42rem;
  }
  #h-e1 {
    height: 24rem;
  }
}

@media screen and (max-width: 998px) {
  #h-w1 {
    height: 45rem;
  }
  #h-w2 {
    height: 52rem;
  }
  #h-w3 {
    height: 45rem;
  }
  #h-e1 {
    height: 24rem;
  }
}

@media screen and (max-width: 680px) {
  .history {
    padding: 40px 10px;
    .tl-box {
      position: relative;
      width: 100%;
      display: block;
      // padding-right: 40px;
      margin-bottom: 50px;
    }
  }
}
</style>
