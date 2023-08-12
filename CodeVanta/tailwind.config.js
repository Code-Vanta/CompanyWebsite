/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'chooseI': "url('/src/assets/backgroundCh.png');",
        'contact':"url('src/assets/contactBg.png')",
        '':"url()"
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

