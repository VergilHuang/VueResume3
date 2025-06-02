<template>
  <div class="tag-container">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'Tag',
}
</script>

<style lang="scss" scoped>
.tag-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(255, 255, 255, 0.6);
  background-color: hsl(217, 72%, 56%);
  margin-left: 4px;
  margin-top: 6px;
}
</style>