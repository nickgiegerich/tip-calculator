module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      lightGrayishCyan: "hsl(185, 41%, 84%)",
      darkGrayishCyan: "hsl(184, 14%, 56%)",
      lightGrayCyan: "hsl(189, 41%, 97%)",
      veryDarkCyan: "hsl(183, 100%, 15%)",
      strongCyan: "hsl(172, 67%, 45%)",
      white: "hsl(0, 0%, 100%)",
      black: "#000",
      error: "#cc6600",
    }
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
}
