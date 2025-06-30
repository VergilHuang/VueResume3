<script setup>
const tags = [
  [
    "jQuery",
    "Bootstrap3",
    "W3CSS",
    "SASS",
    "Gulp",
    "ChartJS",
    "JSP",
    "Java",
    "Tomcat",
    "animateCSS",
    "a11y",
    "Git",
  ],
  [
    "React",
    "React-router",
    "Redux",
    "React-saga",
    "Typescript",
    "Ant Design",
    "Webpack4",
    "Storybook",
    "Git",
    "Genkins",
    "eslint",
    "prettier",
  ],
  [
    "Vue",
    "Vue-router",
    "Vuex",
    "Typescript",
    "Element UI",
    "Vant UI",
    "Webpack4",
    "GitLab-CI/CD",
    "Git",
    "eslint",
    "prettier",
  ],
  [
    "Vue3",
    "Vue-router",
    "Vuex",
    "Typescript",
    "Element UI",
    "React",
    "React-router",
    "Redux",
    "Ant Design",
    "Webpack",
    "Git",
    "tailwindcss",
    "fontawesome",
    "husky",
    "eslint",
    "prettier",
  ],
  [
    "Nuxt2",
    "Vuex",
    "Element UI",
    "Webpack",
    "Gitlab Flow",
    "animejs",
    "nuxt-i18n",
    "tailwindcss",
    "fontawesome",
    "iconify",
    "husky",
    "eslint",
    "prettier",
    "Canva",
    "Cursor",
    "Google Cloud Translate API",
    "OpenAI",
  ],
];
</script>

<template>
  <div class="resume">
    <section>
      <h1>{{ $t("resume") }}</h1>
      <div class="history">
        <div class="tl-box">
          <div class="tl-icon">
            <Icon name="bx:bxs-briefcase-alt-2" size="24" />
          </div>
          <div id="h-w0">
            <span class="tl-title">{{ $t("working_history") }}</span>
          </div>
          <div id="h-w" class="h-w">
            <div class="h-c">
              <h5 class="h-t">
                {{ $t("company_1") }}<span class="h-d">2022/9 ~ 2025/6</span>
              </h5>
              <h6 class="h-j">{{ $t("position_1") }}</h6>
              <h6 class="h-b">
                {{ $t("job_description_1") }}
              </h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>{{ $t("job_detail_1_1") }}</li>
                  <li>{{ $t("job_detail_1_2") }}</li>
                  <li>{{ $t("job_detail_1_3") }}</li>
                  <li>{{ $t("job_detail_1_4") }}</li>
                  <li>{{ $t("job_detail_1_5") }}</li>
                  <li>{{ $t("job_detail_1_6") }}</li>
                  <li>{{ $t("job_detail_1_7") }}</li>
                </ol>
                <Tag v-for="tag of tags[4]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w" class="h-w">
            <div class="h-c">
              <h5 class="h-t">
                {{ $t("company_2") }}<span class="h-d">2021/7 ~ 2022/9</span>
              </h5>
              <h6 class="h-j">{{ $t("position_2") }}</h6>
              <h6 class="h-b">
                {{ $t("job_description_2") }}
              </h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>{{ $t("job_detail_2_1") }}</li>
                  <li>{{ $t("job_detail_2_2") }}</li>
                  <li>{{ $t("job_detail_2_3") }}</li>
                  <li>{{ $t("job_detail_2_4") }}</li>
                  <li>{{ $t("job_detail_2_5") }}</li>
                </ol>
                <Tag v-for="tag of tags[3]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w" class="h-w">
            <div class="h-c">
              <h5 class="h-t">
                {{ $t("company_3") }}<span class="h-d">2020/11 ~ 2021/4</span>
              </h5>
              <h6 class="h-j">{{ $t("position_3") }}</h6>
              <h6 class="h-b">{{ $t("job_description_3") }}</h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>{{ $t("job_detail_3_1") }}</li>
                  <li>{{ $t("job_detail_3_2") }}</li>
                  <li>{{ $t("job_detail_3_3") }}</li>
                  <li>{{ $t("job_detail_3_4") }}</li>
                  <li>{{ $t("job_detail_3_5") }}</li>
                </ol>
                <Tag v-for="tag of tags[2]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w" class="h-w">
            <div class="h-c">
              <h5 class="h-t">
                {{ $t("company_4") }}<span class="h-d">2019/4 ~ 2020/5</span>
              </h5>
              <h6 class="h-j">{{ $t("position_4") }}</h6>
              <h6 class="h-b">{{ $t("job_description_4") }}</h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>{{ $t("job_detail_4_1") }}</li>
                  <li>{{ $t("job_detail_4_2") }}</li>
                  <li>{{ $t("job_detail_4_3") }}</li>
                  <li>{{ $t("job_detail_4_4") }}</li>
                  <li>{{ $t("job_detail_4_5") }}</li>
                  <li>{{ $t("job_detail_4_6") }}</li>
                  <li>{{ $t("job_detail_4_7") }}</li>
                </ol>
                <Tag v-for="tag of tags[1]" :key="tag">{{ tag }}</Tag>
              </div>
            </div>
          </div>
          <div id="h-w" class="h-w">
            <div class="h-c">
              <h5 class="h-t">
                {{ $t("company_5") }}
                <span class="h-d">2015/3 ~ 2018/4</span>
              </h5>
              <h6 class="h-j">{{ $t("position_5") }}</h6>

              <h6 class="h-b">
                {{ $t("job_description_5") }}
              </h6>
              <div class="h-m">
                <ol class="resume-list">
                  <li>
                    {{ $t("job_detail_5_1") }}
                  </li>
                  <li>
                    {{ $t("job_detail_5_2") }}
                  </li>
                  <li>
                    {{ $t("job_detail_5_3") }}
                  </li>
                  <li>
                    {{ $t("job_detail_5_4") }}
                  </li>
                </ol>
                <h6 class="h-j">{{ $t("position_5_sub") }}</h6>
                <h6 class="h-b">
                  {{ $t("job_description_5_sub") }}
                </h6>
                <div class="h-m">
                  <ol class="resume-list">
                    <li>
                      {{ $t("job_detail_5_sub_1") }}
                    </li>
                    <li>
                      {{ $t("job_detail_5_sub_2") }}
                    </li>
                    <li>
                      {{ $t("job_detail_5_sub_3") }}
                    </li>
                    <li>
                      {{ $t("job_detail_5_sub_4") }}
                    </li>
                  </ol>
                </div>
              </div>
              <Tag v-for="tag of tags[0]" :key="tag">{{ tag }}</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$tl_icon_width: 52px;
$h_line_height: 23rem;

.history {
  padding: 40px 10px;
  .tl-box {
    position: relative;
    width: 75%;
    // height: 800px;
    display: inline-block;
    margin: 0 3%;
    vertical-align: top;
    .tl-title {
      font-family: "Signika", serif;
      font-weight: 700;
      font-size: 1.4rem;
      position: absolute;
      left: 45px;
      top: -39px;
    }
    .tl-icon {
      width: $tl_icon_width;
      height: $tl_icon_width;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5069c3;
      color: white;
      font-size: 1.6rem;
      border-radius: 50%;

      .fa-briefcase {
        position: relative;
        left: 2px;
      }
    }
    .h-w {
      padding-bottom: 40px;
    }
    .h-c {
      position: relative;
      top: -18px;
      left: 10px;
      padding-right: 20px;

      .h-t {
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        font-weight: 500;
        font-size: 1.35rem;
        color: #222;
      }
      .h-j {
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: #333;
      }
      .h-b {
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        font-size: 0.9rem;
        color: #5069c3;
      }
      .h-d {
        font-family: "Signika", serif;
        font-weight: 200;
        font-size: 0.92rem;
        color: #555;
        margin-left: 10px;
      }
      .h-m {
        font-size: 1rem;
        line-height: 1.6;
        color: #555;
        padding-top: 10px;

        .resume-list {
          list-style: disc;
          margin-left: 20px;
          li {
            font-size: 1.05rem;
            font-weight: 500;
            padding-bottom: 10px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}

div[id^="h-"] {
  margin-left: calc(#{$tl_icon_width} / 2);
  padding-left: 16px;
  border-left: 2px dashed #d8d8d8;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 2px solid #5069c3;
    position: relative;
    top: 99%;
    left: -22px;
    background: white;
    z-index: 1;
  }
}

#h-w0 {
  height: 5rem;
}

@media screen and (max-width: 1180px) {
  .history {
    .tl-box {
      width: 90%;
    }
  }
}
@media screen and (max-width: 680px) {
  .history {
    padding: 40px 10px;
    .tl-box {
      position: relative;
      width: 100%;
      display: block;
      // padding-right: 40px;
      margin-bottom: 50px;
    }
  }
}
</style>
