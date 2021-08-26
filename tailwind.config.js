module.exports = {
  purge: [
    "./pages/**/*,{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./helpers/**/*.{js,jsx}"
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
