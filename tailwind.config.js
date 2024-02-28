const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000a20d0",
        "primary-alt": "#025269d0",
      },
      animation: {
        gradient: "gradient 2s linear infinite",
        wiggle: "wiggle 500ms ease infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".glass": {
          borderRadius: "2rem",
          borderWidth: "1px",
          borderColor: "transparent",
          transitionDuration: "150ms",
          "&:hover": {
            transform: "translateY(-0.125rem)",
          },
        },
      });
    }),
  ],
  safelist: [
    "from-[#d78dea]",
    "to-[#9c8ade]",
    "from-[#9c8ade]",
    "to-[#6387d3]",
    "from-[#6387d3]",
    "to-[#2d84c8]",
  ],
};
