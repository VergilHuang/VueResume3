<script setup>
definePageMeta({
  middleware: [
    function (to) {
      if (to.path === "/") {
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
