<script setup>
import { ref } from "vue";

const services_data = ref([
  {
    id: 1,
    icon: "icon-park-outline:system",
    title: "Technical Leadership",
    text: `具備獨立規劃前端架構與技術選型的能力，從開發到部署流程全面優化，能帶領團隊重構舊有專案並制定可持續維護的技術策略。`,
  },
  {
    id: 2,
    icon: "icon-park-outline:thinking-problem",
    title: "Systematic Thinking",
    text: "擅長抽象共通模型與元件，提升程式碼模組化與可重用性。善於拆解複雜問題，建立可擴展的程式架構，大幅降低後續維護成本。",
  },
  {
    id: 3,
    icon: "healthicons:i-groups-perspective-crowd",
    title: "Cross-functional Collaboration",
    text: "在跨部門合作中能清楚溝通技術概念與業務需求，協助整合不同領域的觀點，提出具體可行的解法，推動專案順利前進。",
  },
  {
    id: 4,
    icon: "hugeicons:global",
    title: "Global Perspective",
    text: "具備海外工作經驗，擅長與多元文化背景的團隊合作，開闊視野、吸收不同思維，能靈活適應各種工作模式",
  },
]);

// const skills_data = ref([
//   {
//     id: 1,
//     cate_name: "Front-end",
//     skills: [
//       { id: 1, title: "Javascript", percentage: 96 },
//       { id: 2, title: "HTML5", percentage: 88 },
//       { id: 3, title: "CSS", percentage: 96 },
//     ],
//   },
//   {
//     id: 2,
//     cate_name: "Front-end Framework",
//     skills: [
//       { id: 1, title: "React(Hooks)", percentage: 96 },
//       { id: 2, title: "Vue", percentage: 92 },
//       { id: 3, title: "Angular", percentage: 64 },
//     ],
//   },
//   {
//     id: 6,
//     cate_name: "UI Library",
//     skills: [
//       { id: 1, title: "Bootstrap3", percentage: 83 },
//       { id: 2, title: "W3CSS", percentage: 80 },
//       { id: 3, title: "Ant Design", percentage: 88 },
//       { id: 4, title: "Element UI", percentage: 84 },
//       { id: 5, title: "Vant UI", percentage: 90 },
//     ],
//   },
//   {
//     id: 7,
//     cate_name: "Animation Library",
//     skills: [
//       { id: 1, title: "Anime JS", percentage: 70 },
//       { id: 2, title: "Animate CSS", percentage: 60 },
//     ],
//   },
//   {
//     id: 3,
//     cate_name: "Mobile Phone",
//     skills: [
//       { id: 1, title: "Objective-C", percentage: 70 },
//       { id: 2, title: "Java", percentage: 62 },
//     ],
//   },
//   {
//     id: 4,
//     cate_name: "Version Control",
//     skills: [
//       { id: 1, title: "Git", percentage: 84 },
//       { id: 2, title: "SVN", percentage: 58 },
//     ],
//   },
//   {
//     id: 5,
//     cate_name: "Back-end",
//     skills: [
//       { id: 1, title: "Java", percentage: 62 },
//       { id: 2, title: "Express", percentage: 76 },
//       { id: 3, title: "Koa", percentage: 0 },
//     ],
//   },
// ]);

const skills_data2 = [
  {
    id: 1,
    cate_name: "Front-end Core",
    skills: [
      { id: 1, title: "JavaScript (ES6+)", percentage: 96, level: "expert" },
      { id: 2, title: "TypeScript", percentage: 68, level: "experienced" },
      { id: 3, title: "HTML5 / CSS3", percentage: 94, level: "expert" },
      { id: 4, title: "Flexbox / Grid", percentage: 90, level: "expert" },
      { id: 5, title: "Responsive Design", percentage: 88, level: "expert" },
      { id: 6, title: "PWA", percentage: 88, level: "expert" },
    ],
  },
  {
    id: 2,
    cate_name: "Framework & Build Tool",
    skills: [
      { id: 1, title: "Vue 2 / 3", percentage: 96, level: "expert" },
      { id: 2, title: "React (Hooks)", percentage: 65, level: "experienced" },
      { id: 3, title: "Nuxt", percentage: 86, level: "expert" },
      { id: 4, title: "Vite", percentage: 92, level: "expert" },
      { id: 5, title: "Webpack", percentage: 65, level: "experienced" },
      { id: 6, title: "Module Federation", percentage: 28, level: "basic" },
    ],
  },
  {
    id: 3,
    cate_name: "State Management",
    skills: [
      { id: 1, title: "Pinia", percentage: 90, level: "expert" },
      { id: 2, title: "Vuex", percentage: 92, level: "expert" },
      { id: 3, title: "Zustand", percentage: 70, level: "experienced" },
    ],
  },
  {
    id: 4,
    cate_name: "UI & Style",
    skills: [
      { id: 1, title: "Tailwind CSS", percentage: 94, level: "expert" },
      { id: 2, title: "Element UI", percentage: 88, level: "expert" },
      { id: 3, title: "Ant Design", percentage: 88, level: "expert" },
      { id: 4, title: "Vant UI", percentage: 90, level: "expert" },
      { id: 5, title: "Material UI", percentage: 76, level: "experienced" },
      { id: 6, title: "Storybook", percentage: 70, level: "experienced" },
    ],
  },
  {
    id: 5,
    cate_name: "Developer Tools & Quality",
    skills: [
      { id: 1, title: "Git", percentage: 92, level: "expert" },
      { id: 2, title: "GitLab CI", percentage: 78, level: "experienced" },
      {
        id: 3,
        title: "ESLint / Prettier / Husky",
        percentage: 90,
        level: "expert",
      },
    ],
  },
  {
    id: 6,
    cate_name: "Backend & Communication",
    skills: [
      { id: 1, title: "RESTful API", percentage: 92, level: "expert" },
      { id: 2, title: "WebSocket", percentage: 86, level: "expert" },
      { id: 3, title: "Firebase", percentage: 81, level: "experienced" },
    ],
  },
  {
    id: 7,
    cate_name: "Design Collaboration",
    skills: [
      { id: 1, title: "Figma", percentage: 80, level: "experienced" },
      { id: 2, title: "Zeplin", percentage: 80, level: "experienced" },
    ],
  },
];
const about_text = [
  "嗨，我是 Vergil，一位具有架構設計與團隊領導經驗的資深前端工程師。",
  "擅長從零打造專案、重構遺留系統，並能根據產品目標靈活設計模組化架構與前後端合作策略。過去曾領導3~10人前端團隊，協助多位 Junior 工程師成長，並導入如 GitLab Flow、Automatic i18n translation、AI 協作工具等工作流程優化，提升團隊開發效率與品質穩定性。",
  "我主導過多個中大型專案，從後台系統到與硬體整合的創新應用，包含與中華電信、勤威科技合作的視障導航地圖專案，擔任產品主導與主要開發者，從封包協定設計到，APP開發，架構建置全程參與。這些經驗讓我能以全局視角整合技術與業務需求，確保專案落地與可持續發展。",
  "技術方面，熟悉 Vue/Vuex/Pinia、React/Redux/Zustand、Vite/Webpack、Nuxt、Tailwind 等前端主流工具，能依據專案類型選擇 SSR 或 CSR 架構，並考量 SEO、流量成本與裝置限制，做出合適決策。也擅長串接 API、串接 Firebase，並能運用 Git hooks（如 Husky）提升團隊交付品質與整合自動化流程。",
  "熱愛知識分享，擅長跨部門溝通，重視每個角色的價值與服務對象。相信只要不同角色間能夠彼此了解彼此的工作方式與需求，以彼此互相服務互補的良性合作，團隊就能協作順暢、整體的實務能力也能夠持續成長。",
  "良好的流程設計與明確目標主義，是團隊達成每一項里程碑的最好的基石。",
];
</script>

<template>
  <div class="about">
    <section>
      <h1>About Me</h1>
      <p v-for="(text, idx) in about_text" :key="idx" class="about-text">
        {{ text }}
      </p>
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
          v-for="skill_bd in skills_data2"
          :key="skill_bd.id"
          :catename="skill_bd.cate_name"
          :skills="skill_bd.skills"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.about {
  section:nth-child(2) {
    background: #f8f8f8;

    .service {
      width: 22%;
      margin: 0px 11px;
      height: 380px;
      display: inline-block;
      vertical-align: top;
      background: #fff;
      padding: 25px 24px;

      h5 {
        font-family: "Signika", serif;
        font-weight: 600;
        font-size: 1.1rem;
        margin-top: 20px;
        margin-bottom: 14px;
        height: 39px;
        text-align: center;
      }
      p {
        font-size: 1rem;
        color: #555;
      }
      .icon {
        font-size: 4rem;
        display: flex;
        justify-content: center;
        color: black;
      }
    }
  }

  section:nth-child(3) {
    .s-box {
      vertical-align: top;
      display: inline-block;
      width: 22%;
      margin: 12px 47px;
    }

    .percentage {
      width: 100%;
      height: 6px;
      background: #d8d8d8;

      .skill-percen {
        height: 100%;
        background: #5069c3;
      }

      &::after {
        content: attr(data-percentage);
        position: relative;
        left: calc(100% + 8px);
        bottom: 16px;
        font-weight: 500;
        text-transform: capitalize;
        color: #555;
      }
    }

    .category {
      font-family: "Signika", serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: #555;
      padding: 14px 0;
      white-space: nowrap;
    }

    .subject {
      font-family: "Abel", serif;
      font-size: 1.15rem;
      color: #222;
      padding-top: 12px;
    }
  }
  .about-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 6px;
    font-weight: 500;
  }
  .list-wrapepr {
    list-style: circle;
    margin-left: 20px;

    .about-text {
      color: #555;
    }
  }
}

@media screen and (max-width: 1300px) {
  .about {
    section:nth-child(2) {
      .service {
        width: 42%;
        margin: 18px 27px;
        height: 328px;
        padding: 30px 28px;
      }
    }
    section:nth-child(3) {
      .s-box {
        width: 20%;
        margin: 15px 46px;
      }
    }
  }
}

@media screen and (max-width: 1180px) {
  .about {
    section:nth-child(2) {
      .service {
        width: 43%;
        margin: 18px 20px;
        height: 380px;
        padding: 30px 28px;
      }
    }
    section:nth-child(3) {
      .s-box {
        width: 38%;
        margin: 16px 33px;
      }
    }
  }
}

@media screen and (max-width: 998px) {
  .about {
    section:nth-child(2) {
      .service {
        width: 43%;
        margin: 18px 21px;
        height: 340px;
        padding: 30px 28px;
      }
    }
    section:nth-child(3) {
      .s-box {
        width: 39%;
        margin: 16px 34px;
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .about {
    section:nth-child(2) {
      .service {
        width: 84%;
        margin: 28px auto;
        height: auto;
        display: block;
        padding: 30px 28px;
      }
    }
    section:nth-child(3) {
      .s-box {
        width: 32%;
        margin: 16px 8%;
      }
    }
  }
}
</style>
