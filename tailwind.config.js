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
        secondary: "#d78dea",
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
      addComponents({});
    }),
  ],
  safelist: [
    "bg-[linear-gradient(to_right,#d78dea,#9c8ade,#d78dea)]",
    "bg-[linear-gradient(to_right,#9c8ade,#6387d3,#9c8ade)]",
    "bg-[linear-gradient(to_right,#6387d3,#2d84c8,#6387d3)]",
  ],
};
