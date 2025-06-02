<script setup>
import { ref } from "vue";

const services_data = ref([
  {
    id: 1,
    icon: "desktop",
    title: "Web Development",
    text: `曾進修過SSCP網路安全課程。熟悉RWD設計。擅長優化網站效能，提升使用者體驗。使用Webpack優化專案架構，改善開發體驗，優化程式結構，提升彈性、擴充性與可維護性。`,
  },
  {
    id: 2,
    icon: "people-carry",
    title: "Cross-functional Cooperation",
    text: "喜歡跨領域合作方案，結合不同領域的智慧，激盪出意想不到的火花。",
  },
  {
    id: 3,
    icon: "universal-access",
    title: "Accessbility Design",
    text: "熟知無障礙網站設計流程，為無障礙人士設計易用的網站。設計的網站曾通過國家2A等級無障礙標章。",
  },
  {
    id: 4,
    icon: "eye",
    title: "Grouth Hacker",
    text: "喜歡研究分析APP的每次變更與流量變化的關係。研究使用者足跡資料反饋，與團隊激盪假定優化或快速試錯方向。",
  },
]);

const skills_data = ref([
  {
    id: 1,
    cate_name: "Front-end",
    skills: [
      { id: 1, title: "Javascript", percentage: 96 },
      { id: 2, title: "HTML5", percentage: 88 },
      { id: 3, title: "CSS", percentage: 96 },
    ],
  },
  {
    id: 2,
    cate_name: "Front-end Framework",
    skills: [
      { id: 1, title: "React(Hooks)", percentage: 96 },
      { id: 2, title: "Vue", percentage: 92 },
      { id: 3, title: "Angular", percentage: 64 },
    ],
  },
  {
    id: 6,
    cate_name: "UI Library",
    skills: [
      { id: 1, title: "Bootstrap3", percentage: 83 },
      { id: 2, title: "W3CSS", percentage: 80 },
      { id: 3, title: "Ant Design", percentage: 88 },
      { id: 4, title: "Element UI", percentage: 84 },
      { id: 5, title: "Vant UI", percentage: 90 },
    ],
  },
  {
    id: 7,
    cate_name: "Animation Library",
    skills: [
      { id: 1, title: "Anime JS", percentage: 70 },
      { id: 2, title: "Animate CSS", percentage: 60 },
    ],
  },
  {
    id: 3,
    cate_name: "Mobile Phone",
    skills: [
      { id: 1, title: "Objective-C", percentage: 70 },
      { id: 2, title: "Java", percentage: 62 },
    ],
  },
  {
    id: 4,
    cate_name: "Version Control",
    skills: [
      { id: 1, title: "Git", percentage: 84 },
      { id: 2, title: "SVN", percentage: 58 },
    ],
  },
  {
    id: 5,
    cate_name: "Back-end",
    skills: [
      { id: 1, title: "Java", percentage: 62 },
      { id: 2, title: "Express", percentage: 76 },
      { id: 3, title: "Koa", percentage: 0 },
    ],
  },
]);
</script>

<template>
  <div class="about">
    <section>
      <h1>About me</h1>
      <p class="about-text">嗨，我是Vergil。</p>
      <p class="about-text">
        技術領域的
        <b>挑戰者</b
        >，擁抱未知並保持謙遜。喜歡與人分享知識，抱持強烈的好奇心與樂觀態度。
      </p>
      <p class="about-text">
        平台建置經驗豐富，擅長從零開始建置專案，並可以在不同方案內 Trade-off.
      </p>
      <p class="about-text">
        重構專案經驗豐富；致力於在合理時空範圍下對 Lagcy Code 做優化或重寫。
      </p>
      <p class="about-text">
        精通 Vue/React
        與Typescript。個人認為，Typescript是優秀專案的基石，在優秀的專案中都是覺得不可或缺的。
      </p>
      <p class="about-text">高度的責任感 - 君以國士待我 我必國士報之。</p>
      <!-- <ol class="list-wrapepr">
        <li class="about-text">
          使用
          <b>Webpack</b>優化專案架構。
        </li>
        <li class="about-text">
          建立團隊程式規範，使用
          <b>ESLint</b> 約束編寫習慣，引入
          <b>Typescript</b> 進行介面靜態定義與檢查。提升團隊整體開發體驗與效率。
        </li>
        <li class="about-text">程式結構盡可能遵守 SOLID 原則，降低因需求變更而需要大量修改的風險。</li>
        <li
          class="about-text"
        >透過 Tech Talk 和 Daily Traning ，提升團隊產出的 Code Quality，增加專案可維護性與可擴充性，甚至增進團隊的活力。</li>
        <li
          class="about-text"
        >結構化SASS/SCSS規劃:除了使用NormalizeCSS or ResetCSS定義網站HTML一致性樣式外，結合預處理功能運用Programmable特性寫出高動態好維護的樣式表結構，杜絕樣式衝突。</li>
        <li class="about-text">More...</li>
      </ol>-->
    </section>
    <section>
      <h1>My Service</h1>
      <div>
        <Services
          v-for="service in services_data"
          :key="service.id"
          :service="service"
        />
      </div>
    </section>
    <section>
      <h1>My Skills</h1>
      <div>
        <SkillBox
          v-for="skill_bd in skills_data"
          :key="skill_bd.id"
          :catename="skill_bd.cate_name"
          :skills="skill_bd.skills"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "~/assets/style/_about.scss";
</style>
