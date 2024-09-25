/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html,jpg,jpeg}"
  ],
  theme: {
    extend: {     
      keyframes: {
        moveLeft: {
          '0%': { color: 'red', transform: 'translateX(150px)' },
          '100%': { color: 'gray', transform: 'translateX(-5px)' }
        }
      },
      animation: {
        moveLeft: '4s infinite alternate',
      },
      backgroundImage: {
        fondo: "url('./assets/images/fondoOscuro.jpg')"
      }
    },
    colors: {
      slateLight: '#cbd5e1',
      slateIntemediate: '#475569',
      slateDark: '#334155',
      orangeLight: '#fb923c',
      orangeIntemediate: '#ea580c',
      orangeDark: '#78350f',
      greenLight: '#86efac',
      greenIntemediate: '#16a34a',
      greenDark: '#14532d',
      purpleLight: '#d8b4fe',
      purpleIntemediate: '#9333ea',
      purpleDark: '#581c87',
      white: '#FFFFFF',
      black: '#000000'
    },
  },
  plugins: [],
}

