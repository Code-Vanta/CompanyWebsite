/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        '': "url('/src/assets/');",
        '':"url()",
        '':"url()"
      },

      fontFamily: {
        'DM-Sans': ['DM-Sans', 'sans-serif'],
      },
    
      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
    },
  },
  plugins: [],
}

