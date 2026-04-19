<script setup lang="ts">

const localePath = useLocalePath();
const { viewportWidth } = useViewportSize();
const menuRef = ref(null);
const menuBtnRef = ref(null);

const closeMenu = () => {
  if (
    menuRef.value &&
    (menuRef.value as HTMLElement).classList.contains("menu-opened")
  ) {
    toggleMenu();
  }
};

useClickOutside(closeMenu, [menuRef, menuBtnRef]);

const toggleMenu = () => {
  if (import.meta.client && menuRef.value) {
    (menuRef.value as HTMLElement).classList.toggle("menu-opened");
  }
};

// 監聽視窗大小變化，當切換到桌面版時關閉選單
watch(viewportWidth, () => {
  if (viewportWidth.value >= 430) {
    closeMenu();
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
    <nav id="navigationBar" class="nav box-border shadower min-h-0">
      <div class="nav-container">
        <div class="nav-left">
          <NuxtLink
            class="home-btn"
            :to="{ path: localePath('/about'), hash: '#navigationBar' }"
          >
            <Icon name="healthicons:home-alt" size="30px" />
          </NuxtLink>
          <template v-if="viewportWidth > 680">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.name"
              class="router-link"
              :to="localePath(item.to)"
              @click="closeMenu"
            >
              {{ $t(item.name) }}
            </NuxtLink>
          </template>
        </div>
        <div class="nav-right">
          <LanguageSwitcher />
          <button
            v-if="viewportWidth <= 430"
            ref="menuBtnRef"
            class="menu-btn"
            @click="toggleMenu"
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
        v-if="viewportWidth <= 430"
        id="menu-panel"
        ref="menuRef"
        class="menu-lists shadower"
      >
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          class="menu-item"
          :to="{ path: localePath(item.to), hash: '#navigationBar' }"
          @click="closeMenu"
        >
          {{ $t(item.name) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
