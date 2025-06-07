<script setup></script>

<template>
  <div class="contact">
    <section>
      <h1>{{ $t("contact_informations") }}</h1>
      <div class="contact-w">
        <ul class="c-info-box">
          <!-- <li class="c-line">
            <span class="c-title">Address:</span>
            <span class="c-text">新北市五股區</span>
          </li>-->
          <li class="c-line">
            <span class="c-title">{{ $t("job") }}:</span>
            <span class="c-text">{{ $t("frontend_engineer") }}</span>
          </li>
          <li class="c-line">
            <span class="c-title">{{ $t("phone") }}:</span>
            <span class="c-text">+886 978-260-192</span>
          </li>
          <li class="c-line">
            <span class="c-title">{{ $t("email") }}:</span>
            <span class="c-text">zaq9716643@gmail.com</span>
          </li>
          <li class="c-line">
            <span class="c-title">{{ $t("github") }}:</span>
            <span class="c-text">https://github.com/VergilHuang</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact-w {
  padding: 12px;
}

.c-info-box {
  padding: 8px 24px;
  border-left: 4px solid #b2bee8;
  .c-line {
    padding: 4px 0;
    .c-title {
      font-size: 1.28rem;
      font-family: "Signika", serif;
      font-weight: 700;
      color: #222;
      margin-right: 8px;
    }
    .c-text {
      font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      color: #555;
    }
  }
}

.c-map {
  height: 400px;
  #map {
    height: 100%;
  }
}

.headline {
  padding-left: 20px;
  .ct-icon {
    text-align: center;
    font-size: 30px;
  }
  .ct-text {
    text-align: center;
    font-size: 0.95rem;
    padding-top: 10px;
  }
}
</style>
