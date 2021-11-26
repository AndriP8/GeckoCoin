module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-light": "#8dc647",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
