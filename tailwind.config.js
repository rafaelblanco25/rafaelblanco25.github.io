/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0F17",
          surface: "#111827",
          elevated: "#1A2333",
          border: "#1E293B",
        },
        bordeaux: "#8B1E24",
        white: "#F8FAFC",
        black: "#000000",
        gold: "#F5B731",
        gray: "#334155",
        coursera: "#1D59CA",
        gray_text: "#94A3B8",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
