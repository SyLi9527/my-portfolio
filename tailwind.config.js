const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1100': '1100ms',
        '2000': '2000ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-circle': 'var(--bg-linear-gradient)'
        // 'ds3-1': 'url(../public/ds3-1.webp)',
        // 'ds3-2': 'url(../public/ds3-2.webp)',
        // 'ds3-3': 'url(../public/ds3-3.webp)',
        // 'ds3-4': 'url(../public/ds3-4.webp)',
        // 'bb-1': 'url(../public/bb-1.jpg)',
        // 'bb-2': 'url(../public/bb-2.jpg)',
      },
    },
    colors: {
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
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      darumadrop: ["var(--font-darumadrop)", ...fontFamily.sans],
      rs: ["var(--font-rs)", ...fontFamily.sans],
    },
    keyframes: {
      "type-animation-in": {
        "0": { opacity: "0%", visable: "hidden" },
        "0.1%": { opacity: "0%", visable: "visable" },
        "100%": { opacity: "100%", visable: "visable" },
      }
    },
    animation: {
      "type-animation-in": `type-animation-in 3s ease-in-out`,
    }
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
  ],
}
