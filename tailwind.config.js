/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        slate: {
          850: '#151e2e', // Deep luxury dark
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        letterGlow: {
          '0%, 100%': { 
            color: '#fde047',
            textShadow: '0 0 5px #fde047'
          },
          '25%': { 
            color: '#6ee7b7',
            textShadow: '0 0 5px #6ee7b7'
          },
          '50%': { 
            color: '#f97316',
            textShadow: '0 0 5px #f97316'
          },
          '75%': { 
            color: '#a78bfa',
            textShadow: '0 0 5px #a78bfa'
          },
        }
      },
      animation: {
        letterGlow: 'letterGlow 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}