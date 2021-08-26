module.exports = {
  purge: ["./pages/**/*,{js}", "./components/**/*.{js}", "./helpers/**/*.{js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
