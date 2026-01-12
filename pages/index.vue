<script setup>
definePageMeta({
  middleware: [
    function (to) {
      if (to.name.includes("index") && to.name.includes("zh-tw")) {
        return navigateTo("/zh-tw/about");
      } else if (to.name.includes("index")) {
        return navigateTo("/about");
      } else {
        return navigateTo("/about");
      }
    },
  ],
});
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
