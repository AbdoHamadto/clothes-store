/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-opacity' : 'rgba(0, 0, 0, 95%)'
      },
      animation: {
        bounce: 'bounce 1s infinite',
        bounceLeft: 'bounceLeft 1s infinite'
      },
      keyframes: {
        bounce: {
          '0% , 100%': {
            'transform': 'translatex(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translatex(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        bounceLeft: {
          '0% , 100%': {
            'transform': 'translatex(25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translatex(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
      }
    }
  },
  plugins: [],
}
