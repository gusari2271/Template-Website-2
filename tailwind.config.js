/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          950: '#0F0B09',
          900: '#150F0D',
          850: '#1C1512',
          800: '#231B17',
          750: '#2B221D',
          700: '#382B24',
          600: '#523F35',
          500: '#755B4D',
          400: '#A48777',
          300: '#C7B2A4',
          200: '#E2D5CC',
          100: '#F1E9E3',
          50: '#FBF9F6',
        },
        amber: {
          brand: '#C97A3E',
          light: '#DE9558',
          dark: '#A65F29',
          glow: '#EFA66C',
        },
        espresso: '#2A1B14',
        sand: '#FBF9F5',
        cream: '#F4ECE4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
