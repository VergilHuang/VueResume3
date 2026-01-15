<script setup lang="ts">
import { ref, watch } from "#imports";

const { viewportWidth, isMobile } = useViewportSize();
const isMenuOpened = ref(false);
const menuRef = ref(null);

const beActive = () => {
  if (isMenuOpened.value) {
    toggleMenu();
  }
};

const toggleMenu = () => {
  if (import.meta.client && menuRef.value) {
    (menuRef.value as HTMLElement).classList.toggle("menu-opened");
    isMenuOpened.value = !isMenuOpened.value;
  }
};

// 監聽視窗大小變化，當切換到桌面版時關閉選單
watch(viewportWidth, () => {
  if (!isMobile() && isMenuOpened.value) {
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
    <nav
      id="navigationBar"
      class="h-nav min-h-0 border border-solid border-gray-100 bg-white shadow-md"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-9 overflow-hidden rounded-lg">
          <NuxtLink
            class="inline-block bg-primary px-5 py-4 font-serif font-medium text-white hover:bg-primary/80"
            :to="$localePath('/about')"
          >
            <Icon name="healthicons:home-alt" size="30px" />
          </NuxtLink>
          <template v-if="viewportWidth > 680">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.name"
              class="font-serif text-lg font-medium hover:text-primary"
              :to="$localePath(item.to)"
              @click="beActive"
            >
              {{ $t(item.name) }}
            </NuxtLink>
          </template>
        </div>
        <div class="flex items-center justify-evenly gap-2.5">
          <LanguageSwitcher />
          <button
            v-if="isMobile()"
            class="border-l border-solid border-gray-200 pl-5 pr-6 text-gray-600"
            @click.prevent="toggleMenu"
          >
            <Icon name="charm:menu-hamburger" size="40px"></Icon>
          </button>
          <a
            class="relative my-3 inline-block overflow-hidden rounded-full bg-primary align-top hover:bg-primary/80"
            href="mailto:zaq9716643@gmail.com"
            :title="$t('hire_me')"
          >
            <div
              class="flex items-center justify-evenly px-3.5 py-2 font-serif text-lg text-white"
            >
              <span class="hire-text">{{ $t("hire_me") }}</span>
              <div
                class="relative ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary"
              >
                <Icon name="akar-icons:paper-airplane" size="16px" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
    <div class="relative">
      <div
        v-if="isMobile()"
        id="menu-panel"
        ref="menuRef"
        class="absolute left-[1%] top-[5px] z-[1000] h-0 w-[98%] overflow-hidden rounded-lg border border-solid border-gray-300 bg-white opacity-0 shadow-lg transition-all duration-200 ease-[cubic-bezier(0.57,0.14,0.62,1.31)]"
        :class="{
          'menu-opened': isMenuOpened,
        }"
      >
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          class="relative flex h-[68px] flex-col justify-evenly px-0 py-2.5 text-center font-serif text-2xl text-gray-800 hover:text-primary"
          :class="{
            'after:absolute after:bottom-0 after:left-[15%] after:block after:h-px after:w-[70%] after:bg-gray-300':
              item.name !== 'contact',
          }"
          :to="{ path: $localePath(item.to), hash: '#navigationBar' }"
          @click="beActive"
        >
          {{ $t(item.name) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-opened {
  height: 204px;
  top: 10px;
  opacity: 1;
}
</style>
