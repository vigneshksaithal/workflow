module.exports = {
  mode: "jit",
  purge: ["./src/*.svelte", "./src/*.html", "./src/*.css"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
