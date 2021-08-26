module.exports = {
  purge: [
    "./components/**/*.{js,jsx}",
    "./helpers/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
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
