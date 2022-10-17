/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "10px": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    extend: {
      keyframes: {
        shine: {
          "0%": { transform: "skewX(-12deg) translate(0)" },
          "100%": { transform: "skewX(-12deg) translate(100px)" },
        },
      },
      animation: {
        shine: "shine 1s linear 1",
      },
    },
  },
  plugins: [],
};
