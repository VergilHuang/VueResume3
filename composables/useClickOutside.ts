// import { onMounted, onUnmounted } from "vue";

export default (callback: () => void, refs: Ref[]) => {
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  function handleClickOutside(e: Event) {
    const target = e.target;
    const contain = refs.every((ref) => {
      return !ref.value?.contains(target);
    });

    if (contain) {
      callback?.();
    }
  }
};
