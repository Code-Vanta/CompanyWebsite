/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'chooseI': "url('/src/assets/backgroundCh.png');",
        'contact':"url('src/assets/contactBg.png')",
        'smbg':"url('src/assets/smbglanding.png')"
      },

      fontFamily: {
        'DM-Sans': ['DM-Sans', 'sans-serif'],
      },
    
      screens: {
        md: { min: "416px", max: "800px" },

        sm: { max: "415px" }
      },
    },
  },
  plugins: [],
}

