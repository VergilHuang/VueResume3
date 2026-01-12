<script setup>
import winlo8 from "@/assets/img/winlo8.png";
import winlo8_bo from "@/assets/img/winlo8-bo.png";
import oh_game from "@/assets/img/oh-game.png";
import oh_game_bo from "@/assets/img/oh-game-bo.png";
import rsz_tycg from "@/assets/img/rsz_tycg.png";
import rsz_cypd from "@/assets/img/rsz_cypd.png";
</script>

<template>
  <div class="portfolio px-4">
    <section>
      <!-- <h1 class="text-2xl font-bold mb-4">
        {{ $t("portfolio_online_website") }}
      </h1> -->
      <h1 class="text-2xl font-bold mb-4">
        {{ $t("portfolio_screen_capture") }}
      </h1>

      <TipBox class="mb-6"> {{ $t("portfolio_product_warning") }} </TipBox>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PortfolioItem
          :title="$t('portfolio_tycg_title')"
          :description="$t('portfolio_tycg_description')"
          :image-src="rsz_tycg"
          :image-alt="$t('portfolio_tycg_title')"
          :period="$t('portfolio_tycg_period')"
        />
        <!-- link="https://taotalk.tycg.gov.tw/" -->

        <PortfolioItem
          :title="$t('portfolio_crpd_title')"
          :description="$t('portfolio_crpd_description')"
          :image-src="rsz_cypd"
          :image-alt="$t('portfolio_crpd_title')"
          :period="$t('portfolio_crpd_period')"
        />
        <!-- link="https://crpd.sfaa.gov.tw/" -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PortfolioItem
          :title="$t('portfolio_winlo8_title')"
          :description="$t('portfolio_winlo8_description')"
          :image-src="winlo8"
          :use-background-image="true"
        />
        <PortfolioItem
          :title="$t('portfolio_winlo8_bo_title')"
          :description="$t('portfolio_winlo8_bo_description')"
          :image-src="winlo8_bo"
          :use-background-image="true"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PortfolioItem
          :title="$t('lottery_website')"
          :description="$t('portfolio_oh_game_description')"
          :image-src="oh_game"
          :use-background-image="true"
        />
        <PortfolioItem
          :title="$t('portfolio_oh_game_bo_title')"
          :description="$t('portfolio_oh_game_bo_description')"
          :image-src="oh_game_bo"
          :use-background-image="true"
        />
      </div>

      <!-- <h1 class="text-2xl font-bold mb-4">{{ $t("portfolio_fun_work") }}</h1>
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold">
            {{ $t("portfolio_3d_animation_title") }}
          </h3>
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
            />
          </PortfolioWindow>
        </div>

        <div>
          <h3 class="text-lg font-semibold">
            {{ $t("portfolio_switch_component_title") }}
          </h3>
          <PortfolioWindow :width="'100%'">
            <iframe
              src="https://codesandbox.io/embed/08o2k?view=preview&module=%2Fsrc%2Fstyles.scss&hidenavigation=1"
              class="w-full h-[500px] rounded border-0 overflow-hidden"
              title="switch-react"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </PortfolioWindow>
        </div>

        <div>
          <h3 class="text-lg font-semibold">
            {{ $t("portfolio_3d_control_simulator_title") }}
          </h3>
          <PortfolioWindow :width="'100%'">
            <iframe
              src="https://codesandbox.io/embed/3iyc2?view=preview&hidenavigation=1"
              class="w-full h-[500px] rounded border-0 overflow-hidden"
              title="magic-cute-control"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </PortfolioWindow>
        </div>
      </div> -->
    </section>
  </div>
</template>
