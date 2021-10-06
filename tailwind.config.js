const tokens = require("./src/tailwind-tokens.json");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: tokens.colors,
    spacing: tokens.spacing,
    fontSize: tokens.fontSizes,
    fontWeight: tokens.fontWeights,
    fontFamily: tokens.fonts,
    boxShadow: tokens.shadows,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
