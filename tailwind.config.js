const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './assets/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mukta', ...defaultTheme.fontFamily.sans],
        poppins: ['"Poppins"', 'cursive'],
      },
      container: {
        padding: '2rem',
      },
      colors: {
        primary: '#0bd37d',
        secondary: '#FFFFFF',
        neutral: '#306BAC',
        dark: '#0c0f16',
        darksecondary: '#56445D',
        hoverprimary: '#E45310',
        green: '#56E39F',
        blue: "#0A1045",
        offwhite: "#F8FFE5",
        lightgreen: "#06D6A0",
        nav: '#11141b',
        textbox: '#181b21',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive'],
    },
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
