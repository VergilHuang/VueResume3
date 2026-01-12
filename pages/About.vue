<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();

const services_data = [
  {
    id: 1,
    icon: "icon-park-outline:system",
    title: t("service_title_1"),
    text: t("service_text_1"),
  },
  {
    id: 2,
    icon: "icon-park-outline:thinking-problem",
    title: t("service_title_2"),
    text: t("service_text_2"),
  },
  {
    id: 3,
    icon: "healthicons:i-groups-perspective-crowd",
    title: t("service_title_3"),
    text: t("service_text_3"),
  },
  {
    id: 4,
    icon: "hugeicons:global",
    title: t("service_title_4"),
    text: t("service_text_4"),
  },
];

// score under 75 is experienced, above which is expert, and under 50 is basic
const skills_data = [
  {
    id: 1,
    cate_name: "Core",
    skills: [
      { id: 1, title: "HTML5 / CSS3", percentage: 94, level: "expert" },
      { id: 2, title: "JavaScript (ES6+)", percentage: 95, level: "expert" },
      { id: 3, title: "TypeScript", percentage: 75, level: "experienced" },
      { id: 4, title: "PWA", percentage: 70, level: "experienced" },
      { id: 5, title: "NodeJS", percentage: 75, level: "experienced" },
      { id: 6, title: "Docker", percentage: 70, level: "experienced" },
      { id: 7, title: "PostgreSQL", percentage: 48, level: "basic" },
      { id: 8, title: "Security (SSCP)", percentage: 60, level: "experienced" },
    ],
  },
  {
    id: 2,
    cate_name: "Framework/Build Tool",
    skills: [
      { id: 1, title: "Vue 2 / 3", percentage: 96, level: "expert" },
      { id: 2, title: "ReactJS", percentage: 65, level: "experienced" },
      { id: 3, title: "NuxtJS", percentage: 86, level: "expert" },
      { id: 3, title: "NextJS", percentage: 75, level: "experienced" },
      { id: 4, title: "Vite", percentage: 92, level: "expert" },
      { id: 5, title: "Webpack", percentage: 72, level: "experienced" },
      {
        id: 6,
        title: "Module Federation",
        percentage: 62,
        level: "experienced",
      },
      { id: 7, title: "Firebase", percentage: 75, level: "experienced" },
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
    cate_name: "UI/Style",
    skills: [
      { id: 4, title: "Tailwind CSS", percentage: 94, level: "expert" },
      { id: 5, title: "Element UI", percentage: 88, level: "expert" },
      { id: 6, title: "Ant Design", percentage: 85, level: "expert" },
      { id: 7, title: "Vant UI", percentage: 90, level: "expert" },
      { id: 8, title: "Material UI", percentage: 76, level: "experienced" },
      { id: 9, title: "Storybook", percentage: 70, level: "experienced" },
    ],
  },
  {
    id: 5,
    cate_name: "Developer Tools/Quality",
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
    cate_name: "Communication",
    skills: [
      { id: 1, title: "RESTful API", percentage: 90, level: "expert" },
      { id: 2, title: "WebSocket", percentage: 80, level: "expert" },
    ],
  },
  // {
  //   id: 7,
  //   cate_name: "Design Collaboration",
  //   skills: [
  //     { id: 1, title: "Figma", percentage: 60, level: "basic" },
  //     { id: 2, title: "Zeplin", percentage: 60, level: "basic" },
  //   ],
  // },
];

const about_text = [
  t("about_text_1"),
  t("about_text_2"),
  t("about_text_3"),
  t("about_text_4"),
  t("about_text_7"),
  t("about_text_5"),
  t("about_text_6"),
];
</script>

<template>
  <div class="about">
    <section>
      <h1>{{ $t("about_me") }}</h1>
      <p v-for="(text, idx) in about_text" :key="idx" class="about-text">
        {{ text }}
      </p>
    </section>
    <section>
      <h1>{{ $t("my_service") }}</h1>
      <div class="service-box">
        <Services
          v-for="service in services_data"
          :key="service.id"
          :service="service"
        />
      </div>
    </section>
    <section>
      <h1>{{ $t("my_skills") }}</h1>
      <SkillRadar :skills-data="skills_data" />
      <div class="skill-box-container">
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
.about {
  section:nth-child(2) {
    background: #f8f8f8;

    .service-box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .service {
      background: #fff;
      padding: 25px 24px;

      h5 {
        font-family: "Signika", serif;
        font-weight: 600;
        font-size: 1.1rem;
        margin-top: 20px;
        margin-bottom: 14px;
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
    .skill-box-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }

    .skill-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      gap: 10px;

      .percentage {
        height: 6px;
        background: #d8d8d8;
        flex: 1;

        .skill-percen {
          height: 100%;
          background: #5069c3;
        }
      }
      .skill-level {
        flex: none;
        min-width: 90px;
        white-space: nowrap;
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
    font-weight: 500;
    line-height: 1.5;
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 1.2em;

    // &:nth-child(2) {
    //   text-indent: 2em;
    // }
  }
}

@media screen and (max-width: 1300px) {
  .about {
    section:nth-child(3) {
      .skill-box-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media screen and (max-width: 430px) {
  .about {
    section:nth-child(2) {
      .service-box {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
      }
    }
  }
}
</style>
