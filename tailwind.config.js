/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '14': '14px',
        '18': '18px',
      },
      fontWeight: {
        '700': '700',
        '400': '400',
      },
      lineHeight: {
        'normal': 'normal',
      },
    },
  },
  plugins: [],
}

