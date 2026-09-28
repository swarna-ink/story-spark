// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#7A1C2B',
          dark: '#58131E',
          light: '#A3293D',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          hover: '#B8952B',
        },
        silk: {
          DEFAULT: '#FDFBF7',
          dark: '#F5EFE6',
          border: '#EAE1D5',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}