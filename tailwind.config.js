/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#DDC1A6",
        "milky-white": "#EFE9E0",
        "milky-brown": "#CBA37B",
        "dark-brown": "#955639",
        "light-brown": "#C08A5F"
      },
      backgroundImage: {
        "header-bg" : "url('/public/images/headerbg.png')"
      },
      fontFamily: {
        montserrat: ["Montserrat"]
      }
    },
  },
  plugins: [],
}