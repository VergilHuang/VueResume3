# GEMINI.md

This file provides guidance to GEMINI when working with code in this repository.

## Commands

```bash
pnpm dev          # Dev server on http://localhost:3800
pnpm build        # Production build
pnpm generate     # Static site generation (SSG)
pnpm preview      # Preview production build
pnpm type-check   # TypeScript type checking
```

Use `pnpm` — not npm or yarn.

No test framework is configured.

## Architecture

**Nuxt 3 SPA** (SSR disabled) personal portfolio/resume site with multi-language support (English + Traditional Chinese).

### Routing & Layout

File-based routing under `/pages/`. The `index.vue` page immediately redirects to `/about`. All pages are wrapped by the default layout (`/layouts/default.vue`), which renders:

- `AmoebaBackground` — animated CSS background
- `PersonInfo` — sidebar profile card
- `NavigationBar` — top nav

### i18n

`@nuxtjs/i18n` v9. Translation files are in `/i18n/locales/en.json` and `/i18n/locales/zh-tw.json`. Use `$t()` in templates and `useI18n()` in `<script setup>`. The `LanguageSwitcher` component handles locale switching.

### State Management

No Pinia/Vuex — state is component-local via `ref()`/`reactive()`. Shared logic lives in `/composables/`:

- `useViewportSize` — reactive width with breakpoints at 430px, 680px, 1170px
- `useClickOutside` — dropdown close detection

### Key Dependencies

| Purpose          | Library                                              |
| ---------------- | ---------------------------------------------------- |
| Styling          | Tailwind CSS 4 + SCSS                                |
| Animations       | Anime.js 4                                           |
| Charts           | ECharts 5 (radar chart in SkillRadar)                |
| Icons            | @nuxt/icon (Iconify)                                 |
| Images           | @nuxt/image                                          |
| Fonts            | @nuxt/fonts (Noto Sans TC, Signika, Tangerine, Jura) |
| Device detection | @nuxtjs/device                                       |
| SVG              | nuxt-svgo (inline SVG)                               |

### CSS Structure

Global styles imported in `nuxt.config.ts` in this order:

1. `assets/style/style.scss` — layout and main styles
2. `assets/style/print.scss` — print media
3. `assets/style/vue-transition.scss` — page transitions
4. `assets/style/custom-animate.scss` — custom animations
5. `assets/style/main.css`

### TypeScript Types

Domain types are defined in `/types/index.ts`. Key types: `SkillDataType`, `SubCategoryType`, `SkillType` — used to feed the `SkillRadar` and skill box components.

### ESLint

Disabled rules: `no-unused-vars` (warn only), `vue/html-self-closing`, `vue/no-multiple-template-root`, `vue/multi-word-component-names`, `@typescript-eslint/no-explicit-any`.
