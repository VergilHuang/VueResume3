// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  ssr: false,
  nitro: {
    static: false,
  },
  devServer: {
    port: 3800,
  },
  devtools: {
    enabled: process.env.NODE_ENV !== "production",
  },
  app: {
    keepalive: true,
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon", // "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-svgo",
    "@nuxtjs/device",
  ],
  css: [
    "~/assets/style/style.scss",
    "~/assets/style/print.scss",
    "~/assets/style/vue-transition.scss",
    "~/assets/style/custom-animate.scss",
    "~/assets/style/main.css",
  ],

  image: {},

  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "zh-tw", name: "中文", file: "zh-tw.json" },
    ],
    defaultLocale: "en",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      // allowedHosts: [process.env.NGROK_URL || "localhost"],
    },
  },
});
