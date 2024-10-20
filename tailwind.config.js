const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './assets/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        abc: ['ABCNormal-Bold', 'sans-serif'],
        abcnormal: ['ABCNormal-Light', 'sans-serif']
      },
      container: {
        padding: '2rem',
      },
      colors: {
        primary: '#0bd37d',
        secondary: '#FFFFFF',
        neutral: '#306BAC',
        dark: '#0c0f16',
        darksecondary: '#11141b',
        hoverprimary: '#E45310',
        green: '#56E39F',
        blue: "#0A1045",
        offwhite: "#F8FFE5",
        lightgreen: "#06D6A0",
        nav: '#11141b',
        textbox: '#181b21',
        text: '#C8C8C8'
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.15em',
        widest: '.55em',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.814rem',   // 6xl
        '7xl': '4.513rem',   // 7xl
        '8xl': '5.125rem',   // 8xl
        '9xl': '5.859rem',    // 9xl
        '10xl': '6.633rem',   // 10xl
        '11xl': '7.452rem',   // 11xl
        '12xl': '8.316rem',   // 12xl
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
