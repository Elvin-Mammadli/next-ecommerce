/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { transform: 'skewX(-12deg) translate(0)' },
          '100%': { transform: 'skewX(-12deg) translate(100px)' },
        },
      },
      animation: {
        'shine': 'shine 1s linear 1'
      }
    },
  },
  plugins: [],
}
