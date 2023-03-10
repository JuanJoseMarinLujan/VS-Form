/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainColor: "#96B0CD",
      secundaryColor: "#E0EAF3",
      thirdColor: "#EBEFF3",
      grayColor: "#8F8F8F",
      grayColorTwo: "#787878",
      white: "#FFFFFF",
      green: "#3C8043"
    },
    extend: {},
  },
  plugins: [],
}