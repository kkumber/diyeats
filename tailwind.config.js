/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "milky-white": "DDC1A6",
        "milky-brown": "EFE9E0",
        "dark-brown": "CBA37B",
        "light-brown": "C08A5F"
      }
    },
  },
  plugins: [],
}