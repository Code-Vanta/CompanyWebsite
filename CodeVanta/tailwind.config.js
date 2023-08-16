/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      backgroundImage: {

      },

      fontFamily: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
    
      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
    },
  },
  plugins: [],
}

