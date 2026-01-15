/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5069c3',
      },
      maxWidth: {
        'content': '1280px',
      },
      height: {
        'nav': '68px',
      },
      width: {
        'person': '280px',
      },
      spacing: {
        'division': '32px',
      },
      animation: {
        'text-shine': 'shine 3s infinite linear',
      },
      keyframes: {
        shine: {
          '0%': {
            'background-position': '100% 0',
          },
          '100%': {
            'background-position': '-100% 0',
          },
        },
      },
    },
  },
  plugins: [],
}
