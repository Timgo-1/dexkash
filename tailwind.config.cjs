/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.svg')",
        nav: "radial-gradient(lime 5%, darkgoldenrod 15%, midnightblue 60%);",
        grill: "conic-gradient(darkslategray 45deg, gold 60deg, darkslateblue 210deg);",
      },
      backgroundColor: {
        chill: "mediumvioletred",
      },
      colors: {
        primary: "midnightblue",
        secondary: "green",
        white: "lime",
        dimWhite: "lightcyan",
        dimBlue: "slateblue",
        bright: "pink",
        chill: "gold",
      },
      fontFamily: {
        poppins: ["Prata"],
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
