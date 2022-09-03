module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      container: {
        screens: {
          '2xl': '1440px',
        },
      },
      colors: {
        light: '#F0F0F0',
        main: '#E6553B',
        gray: '#808080',
        'light-gray': '#F0F0F0',
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '5xl': '3rem',
      },
      fontFamily: {
        Squada: ['"Squada One"'],
        Paytone: ['"Paytone One"'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
