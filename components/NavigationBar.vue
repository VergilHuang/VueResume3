<script setup>
import { ref, watch } from "#imports";
import animateScrollTo from "animated-scroll-to";

const { viewportWidth, isMobile } = useViewportSize();
const isMenuOpened = ref(false);
const menuRef = ref(null);

const beActive = () => {
  if (isMenuOpened.value) {
    toggleMenu();
  }
  // if on mobile device, include the smooth scroll-to function
  if (isMobile()) {
    animateScrollTo(document.getElementById("navigationBar"), {
      speed: 600,
    });
  }
};

const toggleMenu = () => {
  if (import.meta.client && menuRef.value) {
    menuRef.value.classList.toggle("menu-opened");
    isMenuOpened.value = !isMenuOpened.value;
  }
};

// 監聽視窗大小變化，當切換到桌面版時關閉選單
watch(viewportWidth, (newWidth) => {
  if (newWidth > 680) {
    isMenuOpened.value = false;
  }
});

const menuItems = [
  {
    name: "resume",
    to: "/resume",
  },
  {
    name: "portfolio",
    to: "/portfolio",
  },
  {
    name: "contact",
    to: "/contact",
  },
];
</script>

<template>
  <div>
    <nav id="navigationBar" class="nav box-border shadower">
      <div id="nav" class="nav-container">
        <div class="nav-left">
          <NuxtLink class="home-btn" :to="$localePath('/about')">
            <Icon name="healthicons:home-alt" size="30px" />
          </NuxtLink>
          <template v-if="viewportWidth > 680">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.name"
              class="router-link"
              :to="$localePath(item.to)"
              @click="beActive"
            >
              {{ $t(item.name) }}
            </NuxtLink>
          </template>
        </div>
        <div class="nav-right">
          <LanguageSwitcher />
          <button
            v-if="viewportWidth <= 680"
            class="menu-btn"
            @click.prevent="toggleMenu"
          >
            <Icon name="charm:menu-hamburger" size="40px"></Icon>
          </button>
          <a
            class="hire-btn"
            href="mailto:zaq9716643@gmail.com"
            :title="$t('hire_me')"
          >
            <div class="hire-ract">
              <span class="hire-text">{{ $t("hire_me") }}</span>
              <div class="fly-icon">
                <Icon name="akar-icons:paper-airplane" size="16px" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
    <div class="menu">
      <div
        v-if="viewportWidth <= 680"
        id="menu-panel"
        ref="menuRef"
        class="menu-lists shadower"
      >
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          class="menu-item"
          :to="$localePath(item.to)"
          @click="beActive"
        >
          {{ $t(item.name) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
