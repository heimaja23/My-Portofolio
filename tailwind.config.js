/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'media',
  theme: {
    container: {
      center: 'true',
      padding: '16px',
    },
    extend: {
      colors:{
        TP: '#14b8a6',
        TS: '#0f172a'
      },
      screens: {
        '2xl': '1326px',
      },
    },
  },
  plugins: [],
}
