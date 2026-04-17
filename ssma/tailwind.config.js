/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f8f7f6",
          100: "#e8e6e3",
          200: "#d0ccc7",
          300: "#b8b1ab",
          400: "#a0968f",
          500: "#888b73",
          600: "#706d5c",
          700: "#585145",
          800: "#403a2e",
          900: "#2a2620",
          950: "#1a1612",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
