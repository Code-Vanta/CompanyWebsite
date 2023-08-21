/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      backgroundImage: {

        chooseI: "url('/src/assets/backgroundCh.png');",
        contact: "url('src/assets/contactBg.png')",
        smbg: "url('src/assets/smbglanding.png')",

      },

      fontFamily: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },

      screens: {
        md: { min: "416px", max: "850px" },

        sm: { max: "415px" },
      },
    },
  },
  plugins: [],
};

