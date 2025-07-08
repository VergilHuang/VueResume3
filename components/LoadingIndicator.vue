<script setup>
import logo from "@/assets/img/logo.png";
import { ref, onMounted } from "vue";

const turnFade = ref(false);
const show = ref(true);

onMounted(() => {
  setTimeout(() => {
    turnFade.value = true;
  }, 1000);

  setTimeout(() => {
    show.value = false;
  }, 1300);
});
</script>

<template>
  <Transition name="slowfade">
    <div v-if="show" class="mask-view">
      <div class="indicator-box" :class="{ fade: turnFade }">
        <div class="lds-dual-ring-outer">
          <div class="lds-dual-ring">
            <img :src="logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.fade {
  opacity: 0;
  transition: all 0.5s linear;
}
.mask-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 2000;

  .indicator-box {
    position: relative;
    padding: 36vh 0;
    left: -2.5%;
    width: 300px;
    margin: auto;
    text-align: center;
  }
}

.lds-dual-ring-outer {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: "";
    position: absolute;
    top: -7px;
    display: block;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px solid #222;
    border-color: transparent #222 transparent #222;
    animation: lds-dual-ring-inverse 1.2s ease-in-out infinite;
  }
}

.lds-dual-ring {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    margin: 12px 11px;
    width: 73px;
    height: 73px;
    border-radius: 50%;
    border: 5px solid #888;
    border-color: #888 transparent #888 transparent;
    animation: lds-dual-ring 1.2s ease-in-out infinite;
  }

  img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 31px;
    left: 28px;
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes lds-dual-ring-inverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes rotate-3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
