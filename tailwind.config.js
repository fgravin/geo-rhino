/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^ol-.*$/,
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: '#475569',
        secondary: '#0e7490',
        tertiary: '#a78bfa'
      }
    },
  },
  plugins: [],
}

