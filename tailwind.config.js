/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    './constant/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: "rgba(245, 245, 245, .9)",
        black: "rgba(0, 0, 0, .9)",
        black2: "rgba(0, 0, 0, 1)",
        blue: "rgba(12, 32, 60, 1)",
        lightBlue: "rgba(39, 245, 219, .8)",
        yellow: "rgba(246, 228, 36, 1)",
        red: "rgba(255, 28, 28, 1)",
        dimWhite: "rgba(245, 245, 245, .1)",
        gray: "rgba(208, 208, 208, .5)",
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
