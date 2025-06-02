<script>
export default {
  name: "PortfolioWindow",
  props: ["width", "description"],
  render() {
    const self = this;

    return (
      <div class="window-container" style={{ width: self.width }}>
        <div class="w-window shadower">{self.$slots.default}</div>
      </div>
    );
  },
};
</script>

<style lang="scss">
.window-container {
  width: calc(100% / 2);
  float: left;
  padding: 12px 24px;

  .w-window {
    border-radius: 6px;
    background: white;
    vertical-align: top;
    /* overflow: hidden; */
  }
}
</style>