const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Segoe UI', 'Roboto'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      first: colors.emerald,
      second: colors.teal,
      third: colors.coolGray

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
