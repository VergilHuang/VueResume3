<script setup lang="ts">
defineProps({
  company: { type: String, required: true },
  period: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array<string>, default: () => [] },
});
</script>

<template>
  <div
    class="timeline-item ml-[26px] pl-[16px] pb-[40px] border-l-2 border-dashed border-[#d8d8d8] relative before:content-[''] before:block before:w-[7px] before:h-[7px] before:rounded-full before:border-2 before:border-main before:relative before:top-[99%] before:-left-[20px] before:bg-white before:z-10"
  >
    <div class="timeline-content relative -top-[18px] left-[10px] pr-[20px]">
      <h5 class="font-noto font-medium text-[1.35rem] text-[#222]">
        {{ company }}
        <span
          class="font-signika font-light text-[0.92rem] text-[#555] ml-[10px]"
          >{{ period }}</span
        >
      </h5>
      <h6 class="font-noto font-medium text-[1rem] text-[#333]">
        {{ position }}
      </h6>
      <h6 class="font-noto text-[0.9rem] text-main">{{ description }}</h6>

      <div class="text-[1rem] leading-[1.6] text-[#555] pt-[10px]">
        <ol
          class="list-disc ml-[20px] mb-4 *:text-[1.05rem] *:font-medium *:pb-[10px] *:leading-[1.5]"
        >
          <slot />
        </ol>

        <div v-if="tags.length > 0" class="flex flex-wrap flex-row mt-2">
          <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
        </div>
      </div>

      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media print {
  .timeline-item {
    margin-left: 0 !important;
    padding-left: 0 !important;
    border-left: none !important;
    padding-bottom: 20px !important;
    border-bottom: 1px dashed #ccc;
    margin-bottom: 20px;
    page-break-inside: avoid;

    &::before {
      display: none !important;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .timeline-content {
    top: 0 !important;
    left: 0 !important;
    padding: 0 !important;

    h5 {
      color: #000 !important;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      
      span {
        font-weight: bold;
        color: #333 !important;
      }
    }
  }
}
</style>
