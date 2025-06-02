<script setup>
const tags = [
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
  ],
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
          <div id="h-w1">
            <div class="h-c">
              <h5 class="h-t">鑫城商務有限公司</h5>
              <h6 class="h-j">Front-End Team Lead</h6>
              <h6 class="h-d">2020/11 ~ 2021/4</h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>前端成員4位。日常多與 Team Member 有一定的技術交流。</li>
                  <li>根據業務需求調整Webpack架構，優化部署流程。</li>
                  <li>
                    重構現存專案。為多版型專案拆分多入口設計，重構可複用的
                    Model/Component 封裝成統一維護的
                    Libraries，減少程式耦合度。大幅降低專案的維護與擴充難度。
                  </li>
                  <li>
                    使用由下至上的component設計，可根據不同的設計語言轉換功能與封裝。
                  </li>
                  <li>
                    優化團隊工作流。提升部署效率。跨部門合作時幫助整合與解釋不同領域的語言並建議方法，使事情能夠盡可能高效的進行。確保團隊的每個人都能保持資訊同步。
                  </li>
                </ol>
                <Tag v-for="tag of tags[0]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w2">
            <div class="h-c">
              <h5 class="h-t">吉聯數位科技娛樂有限公司</h5>
              <h6 class="h-j">Front-End Team Lead</h6>
              <h6 class="h-d">2019/4 ~ 2020/5</h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>前端成員8位，定期舉辦Tech Talk活動。</li>
                  <li>根據需求與未來目標研究技術選型與架構規劃。</li>
                  <li>
                    在多版型專案內整理出可複用的 Model/Component/Interface/Enum
                    封裝成Shared Libraries，避免定義失效，重複造輪子。
                  </li>
                  <li>
                    使用由下至上的component設計，可根據不同的設計語言轉換功能與封裝。
                  </li>
                  <li>
                    引入Typescript定義介面，提升開發效率與體驗，建少前後端的在業務上的溝通時間成本，並透過靜態檢查減少
                    Bug 出現的可能。
                  </li>
                  <li>
                    透過webpack根據版型名稱建構多入口專案，配合Genkins做自動部署。
                  </li>
                  <li>
                    優化團隊工作流。提升部署效率。跨部門合作時幫助整合與解釋不同領域的語言並建議方法，使事情能夠盡可能高效的進行。確保團隊的每個人都能保持資訊同步。
                  </li>
                </ol>
                <Tag v-for="tag of tags[1]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w3">
            <div class="h-c">
              <h5 class="h-t">采聲科技股份有限公司 (ESound)</h5>
              <h6 class="h-j">Software Engineer</h6>
              <h6 class="h-d">2015/3 ~ 2018/4</h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    系統研發部門擔任前端工程師，進修過SSCP網路安全類別證照課程。
                  </li>
                  <li>
                    以 Bootstrap3 jQuery 開發桃園市市政信箱網頁，後端 server 為
                    tomcat，使用 Java 寫API處理前端需求。網站符合 a11y
                    規範，獲得無障礙2A等級標章。網站單日流量常態超過千人。
                  </li>
                  <li>
                    以 Bootstrap3
                    開發公司產品主頁，將舊頁面翻新，改善視覺流暢度。
                  </li>
                  <li>
                    以 W3CSS 開發社會局身心障礙權利公約網站，比起Bootstrap
                    ，W3CSS 有更輕量化的特色，可縮短網站First content響應時間。
                  </li>
                </ol>

                <br />實體產品開發經驗:
                實現SBeacon新產品研發與推廣。擔任該產品負責人處理相關業務，其中包含：iOS，Android程式研發實作並上架。
                硬體藍芽4.0客製化內部封包使用AES256實現動態加密。向中華電信與政府相關單位推廣產品，
                從承包專案攤平研發成本最終交付成品，專案時程兩年，在其中的過程學到了有價值的事物。帶領團隊3人（1位後端工程師，1位移動端工程師，1位UI
                designer）。
              </div>
              <Tag v-for="tag of tags[2]" :key="tag">{{ tag }}</Tag>
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

<style lang="scss">
@import "~/assets/style/resume.scss";
</style>
