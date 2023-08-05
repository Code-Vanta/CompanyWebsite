/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      backgroundImage: {
        'value': "url('/src/assets/Rectangle.png')",
        'value1':"url('/src/assets/Rectangle3861.png')"
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

