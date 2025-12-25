/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
}