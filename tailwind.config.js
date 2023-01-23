/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mountain-meadow": {
          DEFAULT: "#0fa968",
          50: "#ecfdf3",
          100: "#d1fae1",
          200: "#a7f3c9",
          300: "#6ee7ac",
          400: "#34d38b",
          500: "#0fa968",
          600: "#05965c",
          700: "#04784c",
          800: "#065f3e",
          900: "#064e34",
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
      },
      fontFamily: {
        gotham:  ["Gotham", "normal"],
      }
    },
  },
  plugins: [],
};
