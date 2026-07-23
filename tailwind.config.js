/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F3E8EE',
          rose: '#D4A5A5',
          gold: '#C9A96E',
          dark: '#2D2D2D',
          cream: '#FAF7F2'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      }
    },
  },
  plugins: [],
}