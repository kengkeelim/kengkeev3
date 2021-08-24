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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.800"),
            },
            h2: {
              color: theme("colors.gray.700"),
            },
            h3: {
              color: theme("colors.gray.600"),
            },
            p: {
              color: theme("colors.gray.500"),
            },
            a: {
              color: theme("colors.orange.light"),
              textDecoration: "none",
              "&:hover": {
                fontWeight: "bold",
              },
            },
            tr: {
              border: "0",
            },
            th: {
              color: theme("colors.gray.700"),
            },
            strong: {
              color: theme("colors.gray.700"),
              fontWeight: theme("font.semibold"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
