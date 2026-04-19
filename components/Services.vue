<template>
  <div class="bg-white flex flex-row xs:flex-col px-[24px] py-[25px] border border-[#f8f8f8] rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.15)]">
    <div class="flex items-center flex-none justify-start xs:justify-center w-[33%] xs:w-auto text-black">
      <Icon :name="service.icon" size="80px" />
    </div>
    <div>
      <span class="block font-signika font-semibold text-[1.1rem] mt-[20px] mb-[10px] xs:mb-[14px] text-left xs:text-center text-black">
        {{ service.title }}
      </span>
      <p class="text-[1rem] text-[#555]">
        {{ service.text }}
      </p>
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
