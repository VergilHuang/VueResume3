<template>
  <div class="service box-border shadower">
    <div class="icon">
      <Icon :name="service.icon" size="80px" />
    </div>
    <h5>{{ service.title }}</h5>
    <p>{{ service.text }}</p>
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
