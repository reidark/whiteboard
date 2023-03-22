const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./drafts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "grid-light": "url('/assets/grid-light.svg')",
        "grid-dark": "url('/assets/grid-dark.svg')",
      },
      colors: {
        dracula: {
          backgroundColor: "#282a36",
        },
      },
      boxShadow: {
        highlight: `
          inset 0px 0px 0px 1px var(--tw-shadow-color),
          inset 0px 1px 0px var(--tw-shadow-color)
        `,
        reflective: "inset 0px -1px 4px -1px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
