<script setup>
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  skillsData: {
    type: Array,
    required: true,
  },
});

const chartRef = ref(null);
let chart = null;

// const getLevelValue = (level) => {
//   switch (level) {
//     case "expert":
//       return 100;
//     case "experienced":
//       return 75;
//     case "basic":
//       return 50;
//     default:
//       return 0;
//   }
// };

const initChart = () => {
  if (!chartRef.value) return;

  chart = echarts.init(chartRef.value, null, {
    height: "580px",
  });

  const categories = props.skillsData.map((category) => category.cate_name);
  const series = props.skillsData.map((category) => {
    const avgValue = (
      category.skills.reduce((acc, skill) => acc + skill.percentage, 0) /
      category.skills.length
    ).toFixed(2);
    return avgValue;
  });

  const radius = window.screen.availWidth > 1170 ? "60%" : "50%";
  const option = {
    title: {
      // text: "Skills Radar Chart",
      text: "Competency Spider Chart",
      top: "10%",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    radar: {
      indicator: categories.map((name) => ({
        name,
        max: 100,
      })),
      center: ["50%", "60%"],
      radius: radius,
      splitNumber: 4,
      axisName: {
        color: "#333",
        fontSize: 12,
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: series,
            name: "技能水平",
            areaStyle: {
              color: "rgba(80, 105, 195, 0.3)",
            },
            lineStyle: {
              color: "#5069c3",
            },
            itemStyle: {
              color: "#5069c3",
            },
          },
        ],
      },
    ],
  };

  chart.setOption(option);
};

onMounted(() => {
  initChart();

  const resizeObserver = new ResizeObserver((entries) => {
    const contentWidth = entries[0].contentRect.width - 100;
    console.log(contentWidth);
    chart?.resize({
      // height: `${contentWidth / 1.8}px`,
      width: `${contentWidth}px`,
    });
  });

  resizeObserver.observe(document.querySelector(".content"));

  // window.addEventListener("resize", () => {

  // });
});

watch(
  () => props.skillsData,
  () => {
    initChart();
  },
  { deep: true }
);
</script>

<template>
  <div
    ref="chartRef"
    class="flex-center"
    style="width: 100%; height: 580px"
  ></div>
</template>

<style scoped></style>
