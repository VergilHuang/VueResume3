<script setup lang="ts">
import { useI18n } from "#imports";
import type { SkillDataType } from "~/types";

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
    icon: "material-symbols:settings-cinematic-blur-outline-sharp",
    title: t("service_title_2"),
    text: t("service_text_2"),
  },
  {
    id: 3,
    icon: "streamline-freehand:collaboration-team-chat",
    title: t("service_title_3"),
    text: t("service_text_3"),
  },
  {
    id: 4,
    icon: "material-symbols:mindfulness-outline-rounded",
    title: t("service_title_4"),
    text: t("service_text_4"),
  },
];

// score under 75 is experienced, above which is expert, and under 50 is basic
// const skills_data = [
//   {
//     id: 1,
//     cate_name: "Core",
//     skills: [
//       { id: 1, title: "HTML5 / CSS3", percentage: 94, level: "expert" },
//       { id: 2, title: "JavaScript (ES6+)", percentage: 95, level: "expert" },
//       { id: 3, title: "TypeScript", percentage: 75, level: "experienced" },
//       { id: 4, title: "PWA", percentage: 70, level: "experienced" },
//       { id: 5, title: "NodeJS", percentage: 75, level: "experienced" },
//       { id: 6, title: "Docker", percentage: 70, level: "experienced" },
//       { id: 7, title: "PostgreSQL", percentage: 48, level: "basic" },
//       { id: 8, title: "Security (SSCP)", percentage: 60, level: "experienced" },
//     ],
//   },
//   {
//     id: 2,
//     cate_name: "Framework/Build Tool",
//     skills: [
//       { id: 1, title: "Vue 2 / 3", percentage: 96, level: "expert" },
//       { id: 2, title: "ReactJS", percentage: 65, level: "experienced" },
//       { id: 3, title: "NuxtJS", percentage: 86, level: "expert" },
//       { id: 3, title: "NextJS", percentage: 75, level: "experienced" },
//       { id: 4, title: "Vite", percentage: 92, level: "expert" },
//       { id: 5, title: "Webpack", percentage: 72, level: "experienced" },
//       {
//         id: 6,
//         title: "Module Federation",
//         percentage: 62,
//         level: "experienced",
//       },
//       { id: 7, title: "Firebase", percentage: 75, level: "experienced" },
//     ],
//   },
//   {
//     id: 3,
//     cate_name: "State Management",
//     skills: [
//       { id: 1, title: "Pinia", percentage: 90, level: "expert" },
//       { id: 2, title: "Vuex", percentage: 92, level: "expert" },
//       { id: 3, title: "Zustand", percentage: 70, level: "experienced" },
//       { id: 4, title: "redux", percentage: 68, level: "experienced" },
//     ],
//   },
//   {
//     id: 4,
//     cate_name: "UI/Style",
//     skills: [
//       { id: 4, title: "Tailwind CSS", percentage: 94, level: "expert" },
//       { id: 5, title: "Element Plus", percentage: 88, level: "expert" },
//       { id: 6, title: "Ant Design", percentage: 85, level: "expert" },
//       { id: 7, title: "Vant UI", percentage: 90, level: "expert" },
//       { id: 8, title: "Material UI", percentage: 76, level: "experienced" },
//       { id: 9, title: "Storybook", percentage: 70, level: "experienced" },
//     ],
//   },
//   {
//     id: 5,
//     cate_name: "LLM model/AI tool",
//     skills: [
//       { id: 1, title: "gemini-3-pro/flash", percentage: 92, level: "expert" },
//       { id: 2, title: "claude-opus-4-5", percentage: 78, level: "experienced" },
//       {
//         id: 3,
//         title: "antigravity",
//         percentage: 78,
//         level: "experienced",
//       },
//     ],
//   },
//   {
//     id: 6,
//     cate_name: "Communication",
//     skills: [
//       { id: 1, title: "RESTful API", percentage: 90, level: "expert" },
//       { id: 2, title: "WebSocket", percentage: 80, level: "expert" },
//     ],
//   },
// ];

const skills_data: SkillDataType[] = [
  {
    id: 1,
    category: "CORE EXPERTISE & FRONT-END",
    sub_categories: [
      {
        sub_name: "Languages",
        skills: [
          { id: 101, title: "HTML5 / CSS3", level: "expert" },
          { id: 102, title: "JavaScript (ES6+)", level: "expert" },
          { id: 103, title: "TypeScript", level: "experienced" },
        ],
      },
      {
        sub_name: "State Management",
        skills: [
          { id: 104, title: "Pinia", level: "expert" },
          { id: 105, title: "Vuex", level: "expert" },
          { id: 106, title: "Zustand", level: "experienced" },
          { id: 107, title: "Redux", level: "experienced" },
        ],
      },
      {
        sub_name: "Styling",
        skills: [
          { id: 108, title: "Tailwind CSS", level: "expert" },
          { id: 109, title: "Element Plus", level: "expert" },
          { id: 110, title: "Ant Design", level: "expert" },
          { id: 111, title: "Vant UI", level: "experienced" },
          { id: 112, title: "Material UI", level: "experienced" },
          { id: 113, title: "Storybook", level: "experienced" },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "ARCHITECTURE & TOOLS",
    sub_categories: [
      {
        sub_name: "Frameworks",
        skills: [
          { id: 201, title: "Vue 2 / 3", level: "expert" },
          { id: 202, title: "ReactJS", level: "experienced" },
          { id: 203, title: "NuxtJS", level: "expert" },
          { id: 204, title: "NextJS", level: "experienced" },
        ],
      },
      {
        sub_name: "Build",
        skills: [
          { id: 205, title: "Vite", level: "experienced" },
          { id: 206, title: "Webpack", level: "experienced" },
          { id: 207, title: "Module Federation", level: "experienced" },
          { id: 208, title: "Monorepo", level: "experienced" },
        ],
      },
      {
        sub_name: "Infrastructure & Others",
        skills: [
          { id: 209, title: "Docker", level: "experienced" },
          { id: 210, title: "Firebase", level: "experienced" },
          { id: 211, title: "PWA", level: "experienced" },
          { id: 212, title: "RESTful API", level: "expert" },
          { id: 213, title: "WebSocket", level: "experienced" },
        ],
      },
      {
        sub_name: "Backend & Security",
        skills: [
          { id: 214, title: "NodeJS", level: "experienced" },
          { id: 215, title: "PostgreSQL", level: "basic" },
          { id: 216, title: "Security (SSCP)", level: "experienced" },
        ],
      },
    ],
  },
];

// v1
// const about_text = [
//   t("about_text_1"),
//   t("about_text_2"),
//   t("about_text_3"),
//   t("about_text_4"),
//   t("about_text_5"),
//   t("about_text_6"),
// ];

// v2
const about_text = [
  t("about_text_v2_1"),
  t("about_text_v2_2"),
  t("about_text_v2_3"),
  t("about_text_v2_4"),
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
      <h1>{{ $t("personal_qualities") }}</h1>
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
      <!-- <SkillRadar v-if="!$device.isMobile" :skills-data="skills_data" /> -->
      <div class="skill-box-container">
        <!-- <SkillBox
          v-for="skill_bd in skills_data"
          :key="skill_bd.id"
          :catename="skill_bd.cate_name"
          :skills="skill_bd.skills"
        /> -->
        <SkillBoxV2 :skills-data="skills_data" />
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

      .icon {
        font-size: 4rem;
        display: flex;
        justify-content: center;
        color: black;
      }
      span {
        font-family: "Signika", serif;
        display: block;
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
    }
  }

  #about-typed {
    min-height: 400px;
  }

  .about-text {
    font-family: monospace, "Inter", serif;
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

@media screen and (max-width: 430px) {
  .about {
    section:nth-child(2) {
      .service-box {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
      }
      .service {
        display: flex;

        .icon {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 33%;
          flex: none;
        }

        span {
          text-align: left;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
