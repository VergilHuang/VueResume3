<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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
    menu.style.top = "10px";
  } else {
    menu.style.height = "244px";
    menu.style.top = "30px";
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
</script>

<template>
  <div>
    <nav id="navigationBar" class="nav box-border shadower">
      <div id="nav">
        <NuxtLink class="home-btn" to="/">
          <Icon name="healthicons:home-alt" size="30px" />
        </NuxtLink>
        <div v-if="desktopSize > 680" class="nav-1">
          <NuxtLink class="router-link" to="/resume" @click="beActive">
            Resume
          </NuxtLink>
          <!-- <NuxtLink class="router-link" to="/portfolio" @click="beActive">
            Portfolio
          </NuxtLink> -->
          <NuxtLink class="router-link" to="/contact" @click="beActive">
            Contact
          </NuxtLink>
        </div>
        <div class="nav-right">
          <a
            v-if="desktopSize <= 680"
            class="menu-btn"
            href="#"
            @click.prevent="toggleMenu"
          >
            <div class="menu-btn-ract"><i class="fas fa-bars" /></div>
          </a>
          <a
            class="hire-btn"
            href="mailto:zaq9716643@gmail.com"
            title="Hire me"
          >
            <div class="hire-ract">
              Hire Me
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
        <NuxtLink class="menu-item" to="/" @click="beActive"> About </NuxtLink>
        <NuxtLink class="menu-item" to="/resume" @click="beActive">
          Resume
        </NuxtLink>
        <!-- <NuxtLink class="menu-item" to="/portfolio" @click="beActive">
          Portfolio
        </NuxtLink> -->
        <NuxtLink class="menu-item" to="/contact" @click="beActive">
          Contact
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
