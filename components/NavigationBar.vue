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
            v-if="viewportWidth <= 680"
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
        v-if="viewportWidth <= 680"
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

<style lang="scss" scoped>
$nav_height: 68px;
$main_color: var(--color-main);

.nav {
  height: $nav_height;
  background: #fff;
  border-radius: 8px;

  .nav-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .home-btn {
    font-family: "Signika", serif;
    font-weight: 500;
    background: $main_color;
    color: white !important;
    display: inline-block;
    padding: 15px 20px;
    word-break: normal;

    &:hover {
      background: rgba(80, 105, 195, 0.8);
    }
    &:visited,
    &:active {
      background: $main_color;
    }
  }

  .router-link {
    font-family: "Signika", serif;
    font-size: 1.2rem;
    font-weight: 500;
    word-break: normal;

    &:hover {
      color: $main_color;
    }
  }

  .nav-left {
    display: flex;
    gap: 36px;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    .menu-btn {
      padding-left: 12px;
      padding-right: 6px;
      color: #555;
      border-left: 1px solid #eaeaea;
    }
    .hire-btn {
      display: inline-block;
      position: relative;
      overflow: hidden;
      border-radius: 24px;
      vertical-align: top;
      margin-right: 13px;
      background: $main_color;
      .hire-ract {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-family: "Signika", serif;
        font-size: 1.18rem;
        padding: 8px 14px;
        color: #fff;

        .hire-text {
          white-space: nowrap;
        }

        .fly-icon {
          margin-left: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          color: $main_color;
          position: relative;
        }
      }

      &:hover {
        background: rgba(80, 105, 195, 0.8);
      }
      &:visited,
      &:active {
        background: $main_color;
      }
    }
  }
}

$menu_height: 204px;
.menu {
  position: relative;
  .menu-lists {
    position: absolute;
    top: 5px;
    left: 1%;
    width: 98%;
    height: 0;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    z-index: 1000;
    transition: all 0.2s cubic-bezier(0.57, 0.14, 0.62, 1.31);
    opacity: 0;
    background: rgb(255, 255, 255);
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &.menu-opened {
      height: $menu_height;
      top: 10px;
      opacity: 1;
    }
    .menu-item {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      font-family: "Signika", serif;
      font-size: 1.4rem;
      height: calc(#{$menu_height} / 3);
      color: #222;
      padding: 10px 0;
      position: relative;

      &:not(:last-child):after {
        content: "";
        display: block;
        width: 70%;
        margin: 0 auto;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 15%;
        background: #dfdfdf;
      }

      &:hover {
        color: $main_color;
      }
    }
  }
}

.router-link-active {
  color: $main_color !important;
}

@media print {
  .nav,
  .menu {
    display: none !important;
  }
}
</style>
