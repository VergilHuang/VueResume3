<script setup></script>

<template>
  <div class="bg-cover">
    <AmoebaBackground class="bg-cover-amoeba" />
    <div id="app">
      <PersonInfo />
      <div class="content">
        <NavigationBar />
        <div class="dynamic-content box-border shadower">
          <slot />
        </div>
      </div>
      <LoadingIndicator />
    </div>
  </div>
</template>
