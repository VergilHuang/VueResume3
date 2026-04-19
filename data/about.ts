import type { SkillDataType } from "~/types";

export const getServicesData = (t: (key: string) => string) => [
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

export const skillsData: SkillDataType[] = [
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

export const getAboutText = (t: (key: string) => string) => [
  t("about_text_v2_1"),
  t("about_text_v2_2"),
  t("about_text_v2_3"),
  t("about_text_v2_4"),
];
