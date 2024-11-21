/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F5F5DC",
        "milky-white": "#EFE9E0",
        "milky-brown": "#CBA37B",
        "dark-brown": "#955639",
        "light-brown": "#C08A5F"
      },
      backgroundImage: {
        "header-bg" : "url('/public/images/headerbg.png')"
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        cormorant: ["Cormorant Garamond"],
        roboto: ["Roboto"]
      }
    },
  },
  plugins: [],
}