/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bordeaux: "#820300",
        white: "#ffffff",
        black: "#000000",
        gold: "#FFC94A",
        gray: "#4C585B",
        coursera: "#1D59CA",
        gray_text: "#E3E1D9",
      },
      backgroundImage: {
        'japan-style': "url('./assets/bg/bg.webp')",
        'mosaic-style': "url('./assets/bg/mosaic-2.webp')",
        'puzzle-style': "url('./assets/bg/puzzle.webp')",
        'chess-style': "url('./assets/bg/chess.webp')",
      },
    },
  },
  plugins: [],
});
