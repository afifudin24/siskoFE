// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'sans-serif'],
        lato: ['"Lato"', 'serif'],
      },
      fontWeight: {
        semibold: 450,
        medium: 400,
      },
      colors: {
        primary: '#FF5833',
        secondary: '#FF7253',
        bg: '#FFDCD5',
        textColor: {
          primary: '#222222',
          secondary: '#666666',
          tertiary: '#252525',
        },
        background: '#F5F5F5',
        bgnav: '#F3F9FB',
        navSlide: '#008ECC',
        stroke: '#EDEDED',
      },
    },
  },
  plugins: [],
};
