/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bordeaux: "#820300",
      white: "#ffffff",
      black: "#000000",
      gold: "#FFC94A",
      gray: "#4C585B",
    },
    extend: {},
  },
  plugins: [],
});
