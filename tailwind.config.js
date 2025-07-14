/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        on_light_gray: "#F5F6FC",
        on_dark_gray: "#5E5E73",
        on_black: "#1E1E2D",
        on_green: "#3ED597",
        on_pink: "#F15C75",
        on_blue: "#4F2EEB",
        on_purple_100: "#E3DEF8",
        on_purple_200: "#E3DEF8",
        on_purple_300: "#8438E4",
        on_purple_400: "#5C2DBA",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}