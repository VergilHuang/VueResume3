<template>
  <div class="s-box">
    <h4 class="category">{{ catename }}</h4>
    <Skill v-for="skill in skills" :key="skill.id" :skill="skill" />
  </div>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
  catename: {
    type: String,
    required: true,
  },
});
</script>
