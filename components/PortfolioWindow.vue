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
  margin: 12px 0;
  border: 1px solid #888;
  border-radius: 6px;

  .w-window {
    border-radius: 6px;
    background: transparent;
    /* overflow: hidden; */
  }
}
</style>
