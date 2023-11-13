const { color } = require("framer-motion")
const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      transitionDelay: {
        "0": "0ms",
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
        "1100": "1100ms",
        "2000": "2000ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-circle": "var(--bg-linear-gradient)"
        // 'ds3-1': 'url(../public/ds3-1.webp)',
        // 'ds3-2': 'url(../public/ds3-2.webp)',
        // 'ds3-3': 'url(../public/ds3-3.webp)',
        // 'ds3-4': 'url(../public/ds3-4.webp)',
        // 'bb-1': 'url(../public/bb-1.jpg)',
        // 'bb-2': 'url(../public/bb-2.jpg)',
      },
    },
    colors: {
      ...colors,
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        dark: "rgb(var(--color-primary-dark))",
        light: "rgb(var(--color-primary-light))",
      },
      secondary: {
        DEFAULT: "rgb(var(--color-secondary))",
        dark: "rgb(var(--color-secondary-dark))",
        light: "rgb(var(--color-secondary-light))",
      },
      gold: "rgb(var(--color-gold))",
      cyan: "rgb(var(--color-cyan))",
      violet: "rgb(var(--color-violet))",
      purple: "rgb(var(--color-purple))",
      "ind-red": "rgb(var(--color-ind-red))",
      // name: "hsl(var(--color-name), var(--color-saturation-light))",
      // tech: "hsl(var(--color-tech), var(--color-saturation-light))",
      // "interest-1": "hsl(var(--color-interest-1), var(--color-saturation-light))",
      // "interest-2": "hsl(var(--color-interest-2), var(--color-saturation-light))",
      // game: "hsl(var(--color-game), var(--color-saturation-light))",
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      darumadrop: ["var(--font-darumadrop)", ...fontFamily.sans],
      rs: ["var(--font-rs)", ...fontFamily.sans],
    },
    keyframes: {
      text_color_change: {
        "0%, 100%" : { color: "hsl(var(--color-item), var(--color-saturation-light))" },
        "20%" : { color: "hsl(calc(var(--color-item) + 75deg), var(--color-saturation-light))" },
        "40%" : { color: "hsl(calc(var(--color-item) + 150deg), var(--color-saturation-light))" },
        "60%" : { color: "hsl(calc(var(--color-item) + 225deg), var(--color-saturation-light))" },
        "80%" : { color: "hsl(calc(var(--color-item) + 300deg), var(--color-saturation-light))" },
      },


    },
    animation: {
      "text-color-change": "text_color_change 30s linear infinite",
      // "type-animation-in": `type-animation-in 1s ease-in-out`,
    }
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
  ],

}
