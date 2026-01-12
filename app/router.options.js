// app/router.options.ts
export default {
  scrollBehavior(to, from, savedPosition) {
    // 如果有 hash，直接回傳 selector 並取消平滑滾動以避免跳閃
    if (to.hash) {
      return {
        el: to.hash,
        top: 0,
        behavior: "auto", // 使用 auto 立即定位，避免 smooth 造成的視覺位移
      };
    }

    // 回到上次存取的位置（如按下瀏覽器回退鍵）
    if (savedPosition) {
      return savedPosition;
    }

    // 預設回頁面頂部
    return { top: 0 };
  },
};
