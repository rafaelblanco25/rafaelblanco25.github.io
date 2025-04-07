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
      coursera: "#1D59CA",
      gray_text: "#E3E1D9",
    },
    extend: {
      backgroundImage: {
        'japan-style': "url('./assets/bg/bg.jpg')",
        'mosaic-style':  "url('./assets/bg/mosaic-2.jpg')",
        'puzzle-style': "url('./assets/bg/puzzle.jpg')",
        'chess-style': "url('./assets/bg/chess.jpg')",
      },
    },
  },
  plugins: [],
});
