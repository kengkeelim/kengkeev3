module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: "#ff4f00",
          dark: "#d45d26",
        },
        oceanGreen: "#3dc495",
        starCommandBlue: "#0282BD",
        purpleMunsell: "#A608C9",
        neonGreen: "#4DE82A",
        salmon: "#fa8072",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
