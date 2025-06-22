<template>
  <div class="window-container" :style="{ width: width }">
    <div class="w-window">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: "100%",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.window-container {
  padding: 12px 0;

  .w-window {
    border-radius: 6px;
    background: transparent;
    /* overflow: hidden; */
  }
}
</style>
