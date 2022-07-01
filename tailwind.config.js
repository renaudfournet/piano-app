/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#365DED',
          200: '#373199'
        },
        secondary: {
          100: '#100A31'
        },
        green: {
          100: '#009B72'
        },
        white: {
          100: '#FFFFFF'
        },
        whitesmoke: {
          100: '#F2F2F2'
        },
        black: {
          100: '#100A31'
        },
        red: {
          100: '#272727'
        },
        wood: {
          100: '#BA8C63'
        },
        hoverButton: {
          100: '#8d81c9'
        }
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      }
    }
  },
  plugins: []
}
