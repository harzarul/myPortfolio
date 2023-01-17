/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "rgba(12, 32, 60, 1)",
        red: "rgba(255, 28, 28, 0.8)",
        green: "rgba(182, 255, 82, 1)",
        white: "rgba(245, 245, 245, .9)",
        dimWhite: "rgba(245, 245, 245, .1)",
        black: "rgba(0, 0, 0, .9)",
        gray: "rgba(208, 208, 208, .8)",
        dimGray: "rgba(208, 208, 208, .4)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        nunito: ["Nunito", "sans"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
