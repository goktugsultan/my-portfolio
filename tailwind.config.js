module.exports = {
  
  mode:"jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      burtons: "burtons",
      poppins: ["Poppins", "sans-serif"],
      sofia:"sofia",
      alkalami:"alkalami"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
