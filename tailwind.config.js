/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: "#ff247a",
          50: "#ffeff3",
          100: "#ffe0ea",
          200: "#ffc6da",
          300: "#ff97bb",
          400: "#ff5d98",
          500: "#ff247a",
          600: "#ff006e",
          700: "#d7005d",
          800: "#b40056",
          900: "#990250",
        },
        "electric-violet": {
          DEFAULT: "#925df5",
          50: "#f6f3ff",
          100: "#eee9fe",
          200: "#dfd6fe",
          300: "#c7b5fd",
          400: "#ac8bfa",
          500: "#925df5",
          600: "#8338ec",
          700: "#7529d8",
          800: "#6222b5",
          900: "#521d95",
        },
        "amber": {
          DEFAULT: "#ffbe0b",
          50: "#fffeea",
          100: "#fffac5",
          200: "#fff685",
          300: "#ffea46",
          400: "#ffdb1b",
          500: "#ffbe0b",
          600: "#e29000",
          700: "#bb6502",
          800: "#984e08",
          900: "#7c400b",
        },
      },
      fontFamily: {
        gotham: ["Gotham", "normal"],
      },
    },
  },
  plugins: [],
};
