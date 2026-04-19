
export const useViewportSize = () => {
  const viewportWidth = ref(0);
  const resizeObserver = ref<ResizeObserver | null>(null);

  const updateViewportSize = () => {
    if (import.meta.client) {
      viewportWidth.value = document.body.clientWidth;
    }
  };

  onMounted(() => {
    if (import.meta.client) {
      updateViewportSize();

      // 使用 ResizeObserver 替代 resize 事件
      resizeObserver.value = new ResizeObserver(() => {
        updateViewportSize();
      });

      // 監聽 body 元素的尺寸變化
      resizeObserver.value.observe(document.body);
    }
  });

  onBeforeUnmount(() => {
    if (resizeObserver.value) {
      resizeObserver.value.disconnect();
    }
  });

  return {
    viewportWidth,
  };
};
