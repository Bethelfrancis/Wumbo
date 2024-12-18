/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'large-text': '40px',
        'medium-text': '26px',
        'semi-text': '20px'
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': '#193766',
        'text-color': '#00153399',
        'blue-text': '#697B98',
        'button-color': '#3B82F6',
      },
      screens: { 
        'sm': {'max': '500px'}, 
        'md': {'max': '768px'}, 
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'}, 
        '2xl': {'max': '1536px'},}
    },
  },
  plugins: [],
}
