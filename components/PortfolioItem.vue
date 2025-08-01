<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "",
  },
  period: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  useBackgroundImage: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="shadow-md rounded overflow-hidden">
    <!-- 外部連結的圖片 -->
    <a
      v-if="link"
      class="block relative"
      :href="link"
      target="_blank"
      :title="title"
    >
      <div class="relative">
        <img
          :src="imageSrc"
          :alt="imageAlt || title"
          class="object-cover w-full aspect-video transition duration-200"
        />
        <div
          v-if="period"
          class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition duration-200"
        >
          <div
            class="text-white text-xl font-bold bg-black/50 px-4 py-6 w-full text-center"
          >
            {{ period }}
          </div>
        </div>
      </div>
    </a>

    <!-- 非外部連結的圖片 -->
    <div v-else class="relative">
      <PreviewModal>
        <template #trigger>
          <img
            v-if="!useBackgroundImage"
            :src="imageSrc"
            :alt="imageAlt || title"
            class="object-cover w-full aspect-video transition duration-200"
          />
          <div
            v-else
            class="bg-size-[auto_100%] hover:bg-size-[auto_150%] bg-position-[50%_0%] bg-no-repeat bg-black w-full aspect-video hover:blur-none! transition-all duration-300"
            :style="{ backgroundImage: `url(${imageSrc})` }"
          ></div>
        </template>
        <template #default>
          <img :src="imageSrc" :alt="imageAlt || title" />
        </template>
      </PreviewModal>
    </div>

    <!-- 圖片描述 -->
    <div class="p-4">
      <p class="text-lg mb-2 font-semibold text-gray-800">
        {{ title }}
      </p>
      <p class="text-sm text-gray-500">
        {{ description }}
      </p>
    </div>
  </div>
</template>
