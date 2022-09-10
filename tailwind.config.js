/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '70' : '20rem',
        '14': '3.5rem',
        '125px' : '125px'
      },
      colors: {
        'hoverspt': '#18d760',
        'purple-main': '#2446b9',
        'green-main': '#1ED760'
      },
      backgroundImage: theme => ({
        'light-theme-bg': "url('../img/bg.jpg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      },
      keyframes: {
        fadeTop: {
          '0%': {opacity: '0', transform: 'translateY(-70px)'},
          '100%': {opacity: '1', transform: 'translateY(0px)'}
        },
      },
      animation: {
        'fadeTop1': 'fadeTop 1s both',
        'fadeTop2': 'fadeTop 1.4s both',
        'fadeTop3': 'fadeTop 1.8s both'
      }
    },
  },
  plugins: [],
}
