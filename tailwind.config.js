const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) }
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) }
const rem0_200 = { ...Array.from(Array(201)).map((_, i) => `${i / 10}rem`) }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      KoddiUDOnGothic: ['KoddiUDOnGothic']
    },
    screens: {
      mobile: '576px',
      desktop: '1024px'
    },
    extend: {
      borderWidth: rem0_10,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_200,
      minHeight: rem0_200,
      spacing: rem0_200,
      gap: rem0_100,
      borderRadius: rem0_100
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false
  }
}
