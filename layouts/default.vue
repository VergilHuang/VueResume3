<script setup></script>

<template>
  <div class="bg-cover">
    <AmoebaBackground class="bg-cover-amoeba" />
    <div id="app">
      <PersonInfo />
      <div class="content">
        <NavigationBar />
        <div id="nav" class="dynamic-content box-border shadower">
          <Transition name="fade" mode="out-in">
            <slot />
          </Transition>
        </div>
      </div>
      <LoadingIndicator />
    </div>
  </div>
</template>

<style lang="scss">
@import url("~/assets/style/style.scss");
</style>
