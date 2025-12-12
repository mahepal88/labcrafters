/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00897B', // Scientific Teal
          light: '#26A69A',
          dark: '#00695C',
        },
        secondary: {
          DEFAULT: '#FFA726', // Accent Orange
          light: '#FFB74D',
          dark: '#F57C00',
        },
        background: {
          DEFAULT: '#F8F9FA', // Light Gray / Off-white
          paper: '#FFFFFF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F1F5F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};