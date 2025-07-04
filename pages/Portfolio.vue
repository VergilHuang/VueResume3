<template>
  <div class="portfolio">
    <section>
      <h1>{{ $t("portfolio_online_website") }}</h1>
      <div class="portfolio-w">
        <div class="portfolio-website-box shadower">
          <a
            class="portfolio-link"
            href="https://taotalk.tycg.gov.tw/"
            target="__blank"
            :title="$t('portfolio_tycg_title')"
          >
            <div class="w-pic">
              <img :src="rsz_tycg" :alt="$t('portfolio_tycg_title')" />
              <div class="hover-item">
                <!-- <Icon name="material-symbols:link"></Icon> -->
                <div class="img-desc">{{ $t("portfolio_tycg_period") }}</div>
              </div>
            </div>
          </a>
          <div class="w-intro">
            <p class="w-title">{{ $t("portfolio_tycg_title") }}</p>
            <p class="w-subtext">
              {{ $t("portfolio_tycg_description") }}
            </p>
          </div>
        </div>
        <div class="portfolio-website-box shadower">
          <a
            class="portfolio-link"
            href="https://crpd.sfaa.gov.tw/"
            target="__blank"
            :title="$t('portfolio_crpd_title')"
          >
            <div class="w-pic">
              <img :src="rsz_cypd" :alt="$t('portfolio_crpd_title')" />
              <div class="hover-item">
                <div class="img-desc">{{ $t("portfolio_crpd_period") }}</div>
              </div>
            </div>
          </a>
          <div class="w-intro">
            <p class="w-title">{{ $t("portfolio_crpd_title") }}</p>
            <p class="w-subtext">
              {{ $t("portfolio_crpd_description") }}
            </p>
          </div>
        </div>
      </div>
      <h1>{{ $t("portfolio_screen_capture") }}</h1>
      <div class="portfolio-w">
        <div class="portfolio-website-box shadower">
          <div class="portfolio-link">
            <div class="w-pic">
              <div
                :class="`bg-[url(${winlo8})] bg-size-[auto_100%] hover:bg-size-[auto_200%]  bg-position-[50%_20%] hover:bg-position-[50%_20%] bg-no-repeat bg-black h-[300px]  hover:blur-none! transition-all duration-300`"
                :alt="$t('portfolio_winlo8_title')"
              />
            </div>
          </div>
          <div class="w-intro">
            <p class="w-title">{{ $t("portfolio_winlo8_title") }}</p>
            <p class="w-subtext">
              {{ $t("portfolio_winlo8_description") }}
            </p>
          </div>
        </div>
      </div>

      <h1>{{ $t("portfolio_fun_work") }}</h1>
      <div>
        <h3>{{ $t("portfolio_3d_animation_title") }}</h3>
        <PortfolioWindow :width="'100%'">
          <iframe
            height="300"
            style="width: 100%"
            scrolling="no"
            title="3d_animation_wave"
            src="https://codepen.io/zaq9716643/embed/aXqGev?default-tab=html%2Cresult"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            <!-- See the Pen
            <a href="https://codepen.io/zaq9716643/pen/aXqGev">
              3d_animation_wave</a
            >
            by Vergil (<a href="https://codepen.io/zaq9716643">@zaq9716643</a>)
            on <a href="https://codepen.io">CodePen</a>. -->
          </iframe>
        </PortfolioWindow>
        <!-- <h3>Large data displaid batch and optimized</h3>
        <PortfolioWindow :width="'100%'">
          <iframe
            height="379"
            style="width: 100%"
            scrolling="no"
            title="Large data display(batch &amp; optimized)"
            src="https://codepen.io/zaq9716643/embed/preview/dyPoNQd?height=265&theme-id=light&default-tab=js,result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen
            <a href="https://codepen.io/zaq9716643/pen/dyPoNQd"
              >Large data display(batch &amp; optimized)</a
            >
            by Vergil (<a href="https://codepen.io/zaq9716643">@zaq9716643</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </PortfolioWindow> -->
        <h3>{{ $t("portfolio_switch_component_title") }}</h3>
        <PortfolioWindow :width="'100%'">
          <iframe
            src="https://codesandbox.io/embed/08o2k?view=preview&module=%2Fsrc%2Fstyles.scss&hidenavigation=1"
            style="
              width: 100%;
              height: 500px;
              border: 0;
              border-radius: 4px;
              overflow: hidden;
            "
            title="switch-react"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </PortfolioWindow>
        <h3>{{ $t("portfolio_3d_control_simulator_title") }}</h3>
        <PortfolioWindow :width="'100%'">
          <iframe
            src="https://codesandbox.io/embed/3iyc2?view=preview&hidenavigation=1"
            style="
              width: 100%;
              height: 500px;
              border: 0;
              border-radius: 4px;
              overflow: hidden;
            "
            title="magic-cute-control"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </PortfolioWindow>
      </div>
    </section>
  </div>
</template>

<script setup>
import winlo8 from "@/assets/img/winlo8.png";
// import winlo8_bo from "@/assets/img/winlo8-bo.png";
// import oh_game from "@/assets/img/oh-game.png";
// import oh_game_bo from "@/assets/img/oh-game-bo.png";
import rsz_tycg from "@/assets/img/rsz_tycg.png";
import rsz_cypd from "@/assets/img/rsz_cypd.png";
</script>

<style lang="scss">
.portfolio-w {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;

  .portfolio-website-box {
    .portfolio-link {
      position: relative;
      display: block;
      .w-pic {
        position: relative;
        img {
          object-fit: cover;
          width: 100%;
          aspect-ratio: 16/9;
          transition: all 0.2s linear;
          overflow: hidden;
        }
      }

      .hover-item {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        // background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(44,44,44,0.8) 70%,rgba(255,255,255,0.8) 100%);
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;

        .img-desc {
          width: 100%;
          height: 80px;
          font-size: 2rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.5);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fa-link {
          position: absolute;
          left: 45%;
          top: 69%;
          font-size: 2.5rem;
          opacity: 0;
          color: #fff;
          transition: all 0.2s ease-in-out;
        }
      }

      &:hover {
        .w-pic {
          img {
            filter: blur(2px);
          }
        }
        .hover-item {
          opacity: 1;
          .fa-link {
            top: 40%;
            opacity: 0.85;
          }
        }
      }
    }

    .w-intro {
      padding: 6px 12px;
      .w-title {
        font-size: 1.2rem;
        color: #222;
        padding-bottom: 8px;
        text-shadow: 0 0 1px rgba(12, 12, 12, 0.1);
      }
      .w-subtext {
        font-size: 0.95rem;
        color: #888;
        text-shadow: 0 0 0.5px rgba(82, 82, 82, 0.1);
      }
    }
  }
}

@media screen and (max-width: 1180px) {
  .portfolio-w {
    .window-container {
      .portfolio-website-box {
        .portfolio-link {
          .w-pic {
            position: relative;
            display: inline-block;
            width: 45%;
            img {
              max-width: 100%;
              height: auto;
              transition: all 0.2s linear;
              overflow: hidden;
            }
          }
        }
        .w-intro {
          display: inline-block;
          padding: 22px 18px;
          width: 54%;
          vertical-align: top;
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .portfolio-w {
    .window-container {
      .portfolio-website-box {
        .portfolio-link {
          .w-pic {
            position: relative;
            display: block;
            width: 100%;
            img {
              max-width: 100%;
              height: auto;
              transition: all 0.2s linear;
              overflow: hidden;
            }
          }
        }
        .w-intro {
          display: block;
          padding: 22px 18px;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .portfolio-w {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
