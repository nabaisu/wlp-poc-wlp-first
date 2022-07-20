/** @type {import('tailwindcss').Config} */
const colors = require("./src/wlp/colors.cjs");


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
};
