<template>
  <div>
    <h6 class="subject">{{ skill.title }}</h6>
    <div :data-percentage="percentage" class="percentage">
      <div class="skill-percen" :style="'width:' + percentage + ';'"></div>
    </div>
  </div>
</template>

<script setup>
import { animate, utils } from "animejs";

const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
const skillData = { percentage: 0 };
const percentage = ref("0%");

onMounted(() => {
  animate(skillData, {
    percentage: props.skill.percentage,
    modifier: utils.round(0),
    onRender: function () {
      percentage.value = skillData.percentage + "%";
    },
  });
});
</script>
