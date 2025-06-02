<script setup>
const props = defineProps({});
const emit = defineEmits([]);
</script>

<template>
  <div class="amoeba">
    <slot />
  </div>
</template>

<style lang="scss">
.amoeba {
  /* width: 80vw;
  height: 80vh; */
  background: rgb(166, 219, 86);
  background: radial-gradient(
    circle,
    rgba(166, 219, 86, 0.15),
    rgba(133, 255, 132, 0.15),
    rgba(132, 133, 255, 0.15),
    rgba(255, 189, 132, 0.15),
    rgba(255, 132, 255, 0.15),
    rgba(255, 166, 132, 0.15),
    rgba(132, 255, 180, 0.15),
    rgba(255, 132, 164, 0.15)
  );
  background-size: 1600% 1600%;
  animation: discolor 20s ease-in-out infinite alternate,
    squirm 20s ease-in-out infinite alternate;
}

@keyframes squirm {
  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes discolor {
  100% {
    background-position: 100% 50%;
  }
}
</style>
