/** @type {import('tailwindcss').Config} */
const colors = require("./src/wlp/colors.cjs");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
<<<<<<< HEAD
    colors: {
      gray: {
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
    },
=======
    colors: colors,
>>>>>>> upstream/main
    extend: {},
  },
  plugins: [],
};
