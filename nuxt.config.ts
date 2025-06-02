// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    // "@nuxt/ui",
  ],

  // css: ["~/assets/style/main.css"],

  image: {},

  // alias: {
  //   "@/": path.resolve(__dirname, "./"),
  //   "~/": path.resolve(__dirname, "./"),
  // },
});
