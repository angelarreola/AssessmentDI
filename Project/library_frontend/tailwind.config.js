/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#933FFF",
        secondary: "#5800C8",
        tertiary: "#151030",
        quaternary: "#F4EBFF",
        "black-custom": "#232323",
        "gray-custom": "#484848",
        "purple-custom": "#191729",
        "light-gray-custom": "#D9D9D9",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}