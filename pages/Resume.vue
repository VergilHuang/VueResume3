<script setup>
import { tagsData as tags } from "~/data/resume";
</script>

<template>
  <div class="resume">
    <section class="resume-section">
      <h1>{{ $t("resume") }}</h1>
      <div class="py-[40px] px-[10px]">
        <div class="relative inline-block m-0 align-top max-sm:block max-sm:w-full max-sm:mb-[50px]">
          <div class="w-[52px] h-[52px] flex items-center justify-center bg-main text-white text-[1.6rem] rounded-full">
            <Icon name="bx:bxs-briefcase-alt-2" size="24" class="relative left-[1px]" />
          </div>
          <div class="h-[5rem] ml-[26px] pl-[16px] border-l-2 border-dashed border-[#d8d8d8] relative before:content-[''] before:block before:w-[7px] before:h-[7px] before:rounded-full before:border-2 before:border-main before:relative before:top-[99%] before:-left-[20px] before:bg-white before:z-10">
            <span class="font-signika font-bold text-[1.4rem] absolute left-[45px] top-[-39px]">{{ $t("working_history") }}</span>
          </div>

          <TimelineItem
            :company="$t('company_1')"
            period="2022/9 ~ 2025/6"
            :position="$t('position_1')"
            :description="$t('job_description_1')"
            :tags="tags[4]"
          >
            <li>{{ $t("job_detail_1_1") }}</li>
            <li>{{ $t("job_detail_1_2") }}</li>
            <li>{{ $t("job_detail_1_4") }}</li>
            <li>{{ $t("job_detail_1_5") }}</li>
            <li><DragonBox>{{ $t("job_detail_1_3") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_1_6") }}</DragonBox></li>
          </TimelineItem>

          <TimelineItem
            :company="$t('company_2')"
            period="2021/7 ~ 2022/9"
            :position="$t('position_2')"
            :description="$t('job_description_2')"
            :tags="tags[3]"
          >
            <li>{{ $t("job_detail_2_1") }}</li>
            <li>{{ $t("job_detail_2_2") }}</li>
            <li>{{ $t("job_detail_2_4") }}</li>
            <li>{{ $t("job_detail_2_5") }}</li>
            <li><DragonBox>{{ $t("job_detail_2_3") }}</DragonBox></li>
          </TimelineItem>

          <TimelineItem
            :company="$t('company_3')"
            period="2020/11 ~ 2021/4"
            :position="$t('position_3')"
            :description="$t('job_description_3')"
            :tags="tags[2]"
          >
            <li>{{ $t("job_detail_3_1") }}</li>
            <li>{{ $t("job_detail_3_2") }}</li>
            <li><DragonBox>{{ $t("job_detail_3_3") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_3_5") }}</DragonBox></li>
          </TimelineItem>

          <TimelineItem
            :company="$t('company_4')"
            period="2019/4 ~ 2020/5"
            :position="$t('position_4')"
            :description="$t('job_description_4')"
            :tags="tags[1]"
          >
            <li>{{ $t("job_detail_4_1") }}</li>
            <li><DragonBox>{{ $t("job_detail_4_2") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_4_3") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_4_4") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_4_5") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_4_6") }}</DragonBox></li>
            <li><DragonBox>{{ $t("job_detail_4_7") }}</DragonBox></li>
          </TimelineItem>

          <TimelineItem
            :company="$t('company_5')"
            period="2015/3 ~ 2018/4"
            :position="$t('position_5')"
            :description="$t('job_description_5')"
            :tags="tags[0]"
          >
            <li>{{ $t("job_detail_5_1") }}</li>
            <li>{{ $t("job_detail_5_2") }}</li>
            <li>{{ $t("job_detail_5_3") }}</li>
            <li>{{ $t("job_detail_5_4") }}</li>
            
            <template #footer>
              <h6 class="font-noto font-medium text-[1rem] text-[#333] pt-4">{{ $t("position_5_sub") }}</h6>
              <h6 class="font-noto text-[0.9rem] text-main">{{ $t("job_description_5_sub") }}</h6>
              <div class="text-[1rem] leading-[1.6] text-[#555] pt-[10px]">
                <ol class="list-disc ml-[20px] mb-4 *:text-[1.05rem] *:font-medium *:pb-[10px] *:leading-[1.5]">
                  <li>{{ $t("job_detail_5_sub_1") }}</li>
                  <li>{{ $t("job_detail_5_sub_2") }}</li>
                  <li>{{ $t("job_detail_5_sub_3") }}</li>
                  <li><DragonBox>{{ $t("job_detail_5_sub_5") }}</DragonBox></li>
                  <li><DragonBox>{{ $t("job_detail_5_sub_4") }}</DragonBox></li>
                </ol>
              </div>
            </template>
          </TimelineItem>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@media print {
  .resume-section {
    padding: 0 !important;
    background-color: white !important;

    h1 {
      page-break-after: avoid;
      break-after: avoid;
      font-size: 1.8rem !important;
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
      margin-bottom: 20px;
      
      &::after {
        display: none !important;
      }
    }
  }

  :deep(.py-\[40px\]) {
    padding: 0 !important;
  }
}
</style>
