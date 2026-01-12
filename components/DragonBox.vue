<script setup>
import Dragon from "@/assets/svg/dragon.svg";
const ramdom = () => Math.floor(Math.random() * 50);
</script>

<template>
  <div
    class="relative bg-amber-100 p-2 border-2 border-amber-300 rounded-md text-amber-800"
  >
    <Dragon
      :class="`absolute -top-[15px] text-2xl`"
      :style="`right:${ramdom()}px`"
    />
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
