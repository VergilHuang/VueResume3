<script setup lang="ts">
import type { SkillDataType } from "~/types";
import clsx from "clsx";
const { skillsData } = defineProps({
  skillsData: {
    default: () => [],
    type: Array<SkillDataType>,
  },
});
</script>

<template>
  <div class="font-inter grid grid-cols-1 gap-5 xs:grid-cols-2">
    <div v-for="{ category, sub_categories } in skillsData" :key="category">
      <h2 class="tracking-wide font-bold text-lg">{{ category }}</h2>
      <div
        v-for="{ sub_name, skills } in sub_categories"
        :key="sub_name"
        class="my-3"
      >
        <h3 class="font-semibold mb-2">{{ sub_name }}</h3>
        <ul>
          <li
            v-for="{ id, title, level } in skills"
            :key="id"
            class="flex justify-between items-center mb-1 text-base"
          >
            <span>{{ title }}</span>
            <span
              class="inline-block px-2 rounded text-white capitalize"
              :class="
                clsx({
                  'bg-emerald-500': level === 'expert',
                  'bg-slate-500': level === 'experienced',
                  'bg-yellow-500': level === 'basic',
                })
              "
              >{{ level }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
