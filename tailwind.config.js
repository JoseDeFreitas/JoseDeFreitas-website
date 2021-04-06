const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Segoe UI', 'Roboto'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      first: colors.coolGray,
      gray: colors.gray,
      green: colors.green,
      purple: colors.purple,
      orange: colors.orange,
      yellow: colors.yellow,
      blue: colors.blue,
      pink: colors.pink,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
