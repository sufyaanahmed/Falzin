/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#002466',
        'accent-emerald': '#043927',
        'accent-burgundy': '#4A0E0E',
        'champagne-gold': '#D4AF37',
        'background-light': '#FDFCFB',
        'background-dark': '#0f1623',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px'
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'ultra-wide': '0.4em',
      }
    }
  },
  plugins: [],
}
