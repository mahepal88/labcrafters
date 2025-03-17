/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006D77', // Teal
          light: '#83C5BE', // Light teal
        },
        secondary: {
          DEFAULT: '#E29578', // Orange
          light: '#FFDDD2', // Light orange
        },
        cream: '#EDF6F9',
        navy: '#006D77',
      },
    },
  },
  plugins: [],
};