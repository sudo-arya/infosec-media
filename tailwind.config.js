/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cs1: "#0D1B2A",
        cs2: "#1B263B",
        cs3: "#415A77",
        cs4: "#778DA9",
        cs5: "#E0E1DD",
        cs6: "#f07167",
        cs7: "#CED4DA",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s ease infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
