# Codebase 分析與優化建議報告

本報告基於對 `VueResume3` 專案 codebase 的初步探索，盤點目前的代碼實作狀況，並列出可強化的架構優化點。

## 1. 發現與現況

### 1.1 Non-Composition API Vue 組件清單
經掃描全站 `.vue` 檔案，絕大部分均已採用 Nuxt 3 推薦的 `<script setup>` 語法，僅有一個舊版 Options API 的殘留：
1. **`components/Tag.vue`**
   - **實作狀況**：僅使用了基本的 `export default { name: 'Tag' }` 導出，未採用 Setup 腳本。
   - **建議**：改為 `<script setup>` 以維持全站寫法的一致性。

### 1.2 資料耦合度 (Data Coupling)
目前的資料結構與視圖層高度耦合，多數靜態資料直接定義在 Vue 組件內部：
- **`pages/About.vue`**：內部定義了 `services_data`, `skills_data`, `about_text` 等大型常數資料。
- **`pages/Resume.vue`**：內部定義了多組二維陣列的 `tags`，以及在模板中寫死的履歷歷程字串與時間。
- **建議**：應建立獨立的 `data/` 資料夾或依賴系統抽取這些內容。

### 1.3 樣式與 Tailwind CSS 狀態
- 專案依賴 `tailwindcss` (目前為 v4 系統環境，透過 `@tailwindcss/vite` 與 `assets/style/main.css` 載入)。
- 歷史遺留之自訂 SCSS 較為繁雜，部分如 `About.vue`, `Resume.vue` 內部自行定義了深層甚至跨層級的子組件覆蓋樣式，違反組件樣式封裝原則。
- **未來規劃**：使用者目標將樣式全面重構並遷移至最新的 Tailwind CSS 4 theme-based 設定 (透過 CSS `@theme`)。

## 2. 階段性優化計畫

基於以上分析與專案目標，已將優化分為數個明確的階段：

*   **階段一：樣式重構 (Style Refactoring) 暨 Tailwind 遷移**
    *   將現有的專案樣式配置轉移至最新的 `css theme base`。
    *   確保所有現有 UI 完全 Pixel-Perfect（像素級完美）。
    *   整理並減少 `style.scss` 中的無效層疊，逐步抽離為 Tailwind utility 或標準 `@apply` 組件類別。
*   **階段二：靜態數據分離 (Static Data Decoupling)**
    *   將 `About.vue`, `Resume.vue` 內的常數與結構資料拆分。
*   **階段三：組件重構與類型強化**
    *   移除所有不必要的註解區塊。
    *   更新 `Tag.vue` 的 API 風格。
    *   對數據強化 TypeScript `interface` 定義。
