<template>
  <div>
    <h6 class="subject">{{ skill.title }}</h6>
    <div class="skill-box">
      <div class="percentage">
        <div class="skill-percen" :style="'width:' + percentage + '%;'"></div>
      </div>
      <span class="skill-level">{{ skill.level }}</span>
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
const percentage = ref(0);

// console.log(props.skill.percentage);
onMounted(() => {
  animate(skillData, {
    percentage: props.skill.percentage,
    modifier: utils.round(0),
    onRender: function () {
      percentage.value = skillData.percentage;
      // console.log(skillData.percentage);
      // if (skillData.percentage <= 33) {
      //   percentage.value = 33;
      // } else if (skillData.percentage <= 66) {
      //   percentage.value = 66;
      // } else if (skillData.percentage <= 100) {
      //   percentage.value = 100;
      // } else {
      //   percentage.value = 0;
      // }
    },
  });
});
</script>
