<script setup>
import photo from "@/assets/img/vergil_photo.jpg";
const name = "Vergil Huang";
const birthday = "1989.01.06";
const email = "zaq9716643@gmail.com";
const github = "https://github.com/VergilHuang";
</script>

<template>
  <div class="person-info box-border shadower">
    <div class="intro-container">
      <div class="n-intro">
        <h3 class="n-name">Vergil Huang</h3>
        <h4 class="n-subtitle text-shine">Senior Frontend Engineer</h4>
      </div>
      <div class="photo-container">
        <img class="vg-photo" :src="photo" alt="Vergil's Picture" />
      </div>
    </div>
    <div class="vg-info-container">
      <div class="vg-info-box">
        <div class="vg-info">
          <span class="info-icon"><i class="far fa-user"></i></span>
          <span class="info-title">Name</span>
          <p class="info">{{ name }}</p>
        </div>
        <div class="vg-info">
          <span class="info-icon"><i class="far fa-calendar-alt"></i></span>
          <span class="info-title">Birthday</span>
          <p class="info">{{ birthday }}</p>
        </div>
      </div>
      <div class="vg-info-box">
        <div class="vg-info">
          <span class="info-icon"><i class="far fa-envelope"></i></span>
          <span class="info-title">E-mail</span>
          <p class="info">{{ email }}</p>
        </div>
        <div class="vg-info">
          <span class="info-icon"><i class="fab fa-github"></i></span>
          <span class="info-title">Github</span>
          <p class="info">
            <a
              :href="github"
              title="Github link"
              target="_blank"
              rel="noopener"
              >{{ github }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$person_width: 280px;
$main_color: var(--color-main);

.person-info {
  flex: none;
  width: $person_width;
  height: min-content;
  background: #fff;
  transform: translateZ(0px);
  position: sticky;
  top: 20px;

  .n-intro {
    padding: 20px 22px;
    position: relative;
    .n-name {
      text-align: center;
      font-family: "Tangerine", serif;
      font-weight: 400;
      font-size: 2.8rem;
      color: #000;
      text-shadow: 4px 4px 4px #eee;
    }
    .n-subtitle {
      font-family: "Jura", serif;
      color: #888;
      font-size: 0.9rem;
      position: absolute;
      left: 12px;
      bottom: -10px;
      z-index: 2;
    }
  }

  .photo-container {
    position: relative;
    display: flex;
    justify-content: center;
    .vg-photo {
      display: block;
      width: 100%;
      filter: brightness(120%) grayscale(31%);
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -1px;
      display: block;
      width: 0;
      height: 0;
      border-width: 25px $person_width 0 0;
      border-style: solid;
      border-color: #fff transparent transparent;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      display: block;
      width: 0;
      height: 0;
      border-width: 0 0 25px $person_width;
      border-style: solid;
      border-color: transparent transparent #fff;
    }
  }

  .vg-info-container {
    padding: 0 29px 20px;
    .vg-info {
      font-size: 0.95rem;
      font-weight: 400;
      color: #888;
      padding-top: 8px;
    }
    .info-icon {
      color: #555;
    }
    .info-title {
      font-family: "Signika", serif;
      color: #555;
      font-weight: 500;
      margin-left: 4px;
    }

    .info {
      text-indent: 0.6rem;
      overflow-wrap: break-word;
      word-break: break-all;

      a {
        color: #888;
        text-decoration: none;
        &:hover {
          color: $main_color;
        }
      }
    }
  }

  @media screen and (max-width: 998px) {
    $person_width_md: 680px;
    width: $person_width_md;
    height: auto;
    display: block;
    position: relative;
    .n-intro {
      padding: 20px 22px 0px;
      .n-name {
        font-size: 3.8rem;
      }
      .n-subtitle {
        font-size: 1.3rem;
        left: 24px;
        bottom: -26px;
      }
    }
    .photo-container {
      &::before {
        border-width: 62px calc(#{$person_width_md} - 1px) 0 0;
      }
      &::after {
        border-width: 0 0 62px calc(#{$person_width_md} - 1px);
      }
    }

    .vg-info-container {
      text-align: center;
      padding: 12px 40px 10px;
      .vg-info-box {
        display: inline-block;
        width: 42%;
        text-align: left;
        vertical-align: top;
        .vg-info {
          font-size: 1.15rem;
        }
      }
    }
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    height: auto;
    display: block;
    .n-intro {
      padding: 16px 22px 0px;
      text-align: center;
      .n-name {
        font-size: 3.8rem;
      }
      .n-subtitle {
        font-size: 1.3rem;
        position: static;
        text-align: center;
        padding-bottom: 4px;
      }
    }
    .photo-container {
      padding: 12px 0 16px;
      .vg-photo {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
      }
      &::before {
        border-width: 0;
      }
      &::after {
        border-width: 0;
      }
    }

    .vg-info-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: #e8e8e8;
      border-top: 1px solid #e8e8e8;

      .vg-info-box {
        display: contents;
      }

      .vg-info {
        background: #fff;
        padding: 16px 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        min-height: 76px;
      }

      .info-icon {
        display: none;
      }

      .info-title {
        font-size: 0.78rem;
        font-family: "Jura", serif;
        text-transform: uppercase;
        letter-spacing: 0.13em;
        color: $main_color;
        font-weight: 700;
        margin-left: 0;
      }

      .info {
        text-indent: 0;
        font-size: 0.88rem;
        color: #222;
        font-weight: 500;
        line-height: 1.35;
        overflow-wrap: break-word;
        word-break: break-all;

        a {
          color: #222;
          text-decoration: none;
          &:hover {
            color: $main_color;
          }
        }
      }
    }
  }

  @media print {
    border: none !important;
    width: 95% !important;
    height: auto !important;
    position: static !important;
    box-shadow: none !important;
    margin: 20px auto !important;
    background: transparent !important;

    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;

    .intro-container {
      display: flex;
      gap: 20px;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;

      .n-intro {
        padding: 0 !important;
        text-align: left;

        .n-name {
          font-size: 2.2rem !important;
          margin: 0;
        }
        .n-subtitle {
          position: block !important;
          font-size: 1rem !important;
        }
        .text-shine {
          appearance: none !important;
        }
      }

      .photo-container {
        &::after,
        &::before {
          display: none !important;
        }

        .vg-photo {
          width: 80px !important;
          height: 80px !important;
          border-radius: 15px !important;
          overflow: hidden !important;

          object-fit: contain;
          object-position: center;
        }
      }
    }

    .vg-info-container {
      padding: 0 !important;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;

      .vg-info-box {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .info-title {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
