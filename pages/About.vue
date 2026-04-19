<script setup lang="ts">
import { getServicesData, skillsData, getAboutText } from "~/data/about";

const { t } = useI18n();

const services_data = getServicesData(t);
const skills_data = skillsData;
const about_text = getAboutText(t);
</script>

<template>
  <div class="about">
    <section>
      <h1>{{ $t("about_me") }}</h1>
      <p
        v-for="(text, idx) in about_text"
        :key="idx"
        class="font-mono text-[1.1rem] font-medium leading-[1.5] text-[#333] mb-[1.2em]"
      >
        {{ text }}
      </p>
    </section>
    <section class="bg-[#f8f8f8]">
      <h1>{{ $t("personal_qualities") }}</h1>
      <div class="grid grid-cols-1 xs:grid-cols-2 gap-[20px]">
        <Services
          v-for="service in services_data"
          :key="service.id"
          :service="service"
        />
      </div>
    </section>
    <section>
      <h1>{{ $t("my_skills") }}</h1>
      <!-- <SkillRadar v-if="!$device.isMobile" :skills-data="skills_data" /> -->
      <div class="skill-box-container">
        <SkillBoxV2 :skills-data="skills_data" />
      </div>
    </section>
  </div>
</template>
