/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
    keyframes: {
      in: {
        "0%": { transform: "translateX(150%)" },
        "15%": { transform: "translateX(150%)" }, // This helps for delay
        "100%": { transform: "translateX(0)" },
      },
      out: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(100%)" },
      },
    },
    animation: {
      "animate-in": "in 800ms ",
      "animate-out": "out 500ms ease-in-out",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
