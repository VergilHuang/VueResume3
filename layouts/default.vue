<script setup></script>

<template>
  <div class="bg-cover">
    <AmoebaBackground class="bg-cover-amoeba" />
    <div id="app">
      <PersonInfo />
      <div class="content">
        <NavigationBar />
        <div class="dynamic-content box-border shadower">
          <slot />
        </div>
      </div>
      <LoadingIndicator />
    </div>
  </div>
</template>

<style lang="scss">
$division: 32px;
$main_color: var(--color-main);

.bg-cover {
  background: linear-gradient(to bottom, #e8e8fa 0%, #fae8df 54%, #e8e8e8 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #222;
  min-height: 100vh;
}

.bg-cover-amoeba {
  position: fixed;
  z-index: 0;
  bottom: -5%;
  top: -5%;
  left: -6%;
  right: 5%;
}

#app {
  width: 1280px;
  margin: auto;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  gap: 40px;
}

.content {
  position: relative;
  flex: 1;
  min-width: 0;

  .dynamic-content {
    margin-top: $division;
    background: #fff;
    font-size: 1.05rem;
    transition: all 0.5s ease;

    em {
      font-style: normal;
    }

    .t-link {
      color: $main_color;
      &:hover {
        opacity: 0.8;
      }
    }

    section {
      padding: 27px 26px 46px;

      h1 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 12px;
        font-family: "Signika", serif;
        display: inline-block;
        &:after {
          content: "";
          height: 8px;
          background: #5069c3;
          opacity: 0.3;
          width: 100%;
          display: block;
          position: relative;
          top: -14px;
        }
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  #app {
    width: 1120px;
  }
  .content .dynamic-content {
    margin-top: $division;
  }
}

@media screen and (max-width: 1180px) {
  #app {
    width: 980px;
  }
  .content .dynamic-content {
    margin-top: $division;
  }
}

@media screen and (max-width: 998px) {
  #app {
    width: 680px;
    flex-direction: column;
  }

  .content {
    width: 680px;
    display: inline-block;
    padding-left: 0;
    padding-top: $division;

    .dynamic-content {
      margin-top: $division;

      section {
        padding: 27px 15px 46px;
        overflow: hidden;
      }
    }
  }
}

@media screen and (max-width: 680px) {
  #app {
    width: 100%;
    margin: 0 auto;
    padding-top: 0;
  }

  .content {
    width: 100%;
    display: inline-block;
    padding-left: 0;
    padding-top: $division;

    .dynamic-content {
      margin-top: $division;
    }
  }
}

@media print {
  .bg-cover-amoeba {
    display: none !important;
  }

  .bg-cover {
    background: white !important;
  }

  #app {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    gap: 0 !important;
  }

  .content {
    width: 95% !important;
    padding: 0 !important;
    margin: 0 auto !important;

    .dynamic-content {
      margin-top: 10px !important;
      background: transparent !important;
      box-shadow: none !important;

      section {
        padding: 0 !important;
        background-color: white !important;

        h1 {
          page-break-after: avoid;
          break-after: avoid;
          font-size: 1.8rem !important;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 20px;
          &::after {
            display: none !important;
          }
        }
      }
    }
  }
}
</style>
