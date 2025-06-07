// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    // "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-svgo",
  ],

  image: {},

  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "zh-TW", name: "中文", file: "zh-TW.json" },
    ],
    defaultLocale: "en",
  },
});