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
  isLink: {
    type: Boolean,
    default: false,
  },
  useBackgroundImage: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="shadow-md rounded overflow-hidden">
    <a
      v-if="isLink && link"
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

    <div v-else class="relative">
      <img
        v-if="!useBackgroundImage"
        :src="imageSrc"
        :alt="imageAlt || title"
        class="object-cover w-full aspect-video transition duration-200"
      />
      <div
        v-else
        class="bg-size-[auto_100%] hover:bg-size-[auto_220%] bg-position-[50%_0%] bg-no-repeat bg-black h-[300px] hover:blur-none! transition-all duration-300"
        :style="{ backgroundImage: `url(${imageSrc})` }"
      ></div>
    </div>

    <div class="p-5">
      <p class="text-lg font-semibold text-gray-800">
        {{ title }}
      </p>
      <p class="text-sm text-gray-500">
        {{ description }}
      </p>
    </div>
  </div>
</template>
