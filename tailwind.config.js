module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "Roboto Mono",
    },
    extend: {
      colors: {
        white: "#fefefe",
        black: "#010101",
      },
    },
  },
  plugins: [],
};
