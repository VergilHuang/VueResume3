<template>
  <div class="service box-border shadower">
    <div class="icon">
      <Icon :name="service.icon" size="80px" />
    </div>
    <div>
      <span>{{ service.title }}</span>
      <p>{{ service.text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>
