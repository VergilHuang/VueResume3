<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const backdrop = ref(null);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

// 點擊背景關閉模態框
const handleBackdropClick = (event) => {
  console.log(event.target, backdrop.value);
  if (event.target === backdrop.value) {
    closeModal();
  }
};

// ESC 鍵關閉模態框
const handleKeydown = (event) => {
  if (event.key === "Escape" && isOpen.value) {
    closeModal();
  }
};

// 監聽鍵盤事件
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div>
    <!-- 觸發按鈕 -->
    <div class="cursor-pointer" @click="openModal">
      <slot name="trigger" />
    </div>

    <!-- 模態框 -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center overscroll-contain"
          @click="handleBackdropClick"
        >
          <!-- 黑色背景遮罩 -->
          <div
            ref="backdrop"
            class="absolute inset-0 bg-black/80 overscroll-contain"
          ></div>

          <!-- 模態框內容 -->
          <div
            class="relative z-10 max-w-[90vw] max-h-[90vh] bg-transparent rounded-lg shadow-2xl overflow-visible"
            @click.stop
          >
            <!-- 關閉按鈕 -->
            <button
              class="absolute -top-2 -right-2 p-0 z-20 text-white shadow-2xl transition-colors duration-200 rounded-full border-white border-2"
              aria-label="關閉"
              @click="closeModal"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- 內容區域 -->
            <div class="p-6">
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
