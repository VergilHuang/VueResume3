<script setup>
import { ref, onMounted, onBeforeUnmount } from "#imports";
import animateScrollTo from "animated-scroll-to";

const desktopSize = ref(0);
const menu_opened = ref(false);

const beActive = () => {
  if (menu_opened.value) {
    toggleMenu();
  }
  // if on mobile device, include the smooth scroll-to function
  if (desktopSize.value <= 680) {
    animateScrollTo(document.getElementById("navigationBar"), {
      speed: 600,
    });
  }
};

const toggleMenu = () => {
  let menu = document.getElementById("menu-panel");

  if (menu_opened.value) {
    menu.style.height = "0";
    menu.style.top = "5px";
    menu.style.opacity = "0";
  } else {
    menu.style.height = "134px";
    menu.style.top = "10px";
    menu.style.opacity = "1";
  }
  menu_opened.value = !menu_opened.value;
};

const _detectSize = () => {
  desktopSize.value = document.body.clientWidth;
  if (desktopSize.value <= 680) {
    menu_opened.value = false;
  }
};

onMounted(() => {
  desktopSize.value = document.body.clientWidth;
  window.addEventListener("resize", _detectSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", _detectSize);
});

const menu_items = [
  {
    name: "resume",
    to: "/resume",
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
          <template v-if="desktopSize > 680">
            <NuxtLink
              v-for="item in menu_items"
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
            v-if="desktopSize <= 680"
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
        v-if="desktopSize <= 680"
        id="menu-panel"
        class="menu-lists shadower"
      >
        <NuxtLink
          v-for="item in menu_items"
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
