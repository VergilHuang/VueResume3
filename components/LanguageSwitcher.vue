<script setup>
import { ref } from "vue";
import { useI18n } from "#imports";
import FlagEN from "@/assets/svg/flag_en.svg";
import FlagTW from "@/assets/svg/flag_zh-TW.svg";
const { locale, locales, setLocale } = useI18n();
const isOpen = ref(false);

const currentLanguage = ref(
  locales.value.find((lang) => lang.code === locale.value)
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = (lang) => {
  setLocale(lang.code);
  currentLanguage.value = lang;
  isOpen.value = false;
};
</script>

<template>
  <div class="relative inline-block">
    <button
      class="flex items-center gap-2 border-none bg-transparent p-1.5 text-2xl transition-transform duration-200 hover:text-primary"
      @click="toggleDropdown"
    >
      <Icon name="material-icon-theme:i18n" size="24px"></Icon>
    </button>

    <div
      v-show="isOpen"
      class="absolute right-0 top-full z-[9999] min-w-[120px] rounded-lg bg-white py-2 shadow-lg"
    >
      <button
        v-for="lang in locales"
        :key="lang.code"
        class="flex w-full cursor-pointer items-center gap-2 border-none bg-transparent px-4 py-2 transition-colors duration-200 hover:bg-gray-100"
        @click="switchLanguage(lang)"
      >
        <span class="font-serif text-2xl font-light">
          <FlagTW v-if="lang.code === 'zh-tw'" filled></FlagTW>
          <FlagEN v-else filled></FlagEN>
        </span>
        <span class="relative -top-0.5 text-base leading-4">{{
          lang.name
        }}</span>
      </button>
    </div>
  </div>
</template>
