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
  <div class="language-switcher">
    <button class="language-button" @click="toggleDropdown">
      <Icon name="material-icon-theme:i18n" size="24px"></Icon>
      <!-- <span class="name">{{ currentLanguage.name }}</span> -->
    </button>

    <div v-show="isOpen" class="language-dropdown">
      <button
        v-for="lang in locales"
        :key="lang.code"
        class="language-option"
        @click="switchLanguage(lang)"
      >
        <span class="flag">
          <FlagTW v-if="lang.code === 'zh-tw'" filled></FlagTW>
          <FlagEN v-else filled></FlagEN>
        </span>
        <span class="name">{{ lang.name }}</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$main_color: #5069c3;

.language-switcher {
  position: relative;
  display: inline-block;
}

.language-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 1.5rem;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-button:hover {
  color: $main_color;
}

.language-dropdown {
  position: absolute;
  z-index: 9999;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 120px;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.language-option:hover {
  background-color: #f5f5f5;
}

.flag {
  font-family: "Signika", serif;
  font-size: 1.5rem;
  font-weight: 300;
}

.name {
  font-size: 1rem;
  line-height: 1rem;
  position: relative;
  top: -2px;
}
</style>
