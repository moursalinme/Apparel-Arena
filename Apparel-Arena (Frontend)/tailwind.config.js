/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
  theme: {
    extend: {
      colors: {
        'arena-color': '#6A9485',
        'arena-color-hover': '#366454',
      },
    }
  },
  plugins: [],
}

/* select color */
/* #6A9485  green*/
// #366454 green hover
/* #F18787  red*/
/* #d62a2a  red hover*/
