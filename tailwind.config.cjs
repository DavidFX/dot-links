/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#020B11",
        light: "#FDFFFC",
        primary: "#2EC4B6",
        secondary: "#E71D36",
        tertiary: "#FF9F1C",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
