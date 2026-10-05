/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#06080f',
        surface: '#0d1117',
        accent: '#38bdf8',
        accent2: '#818cf8',
        journey: {
          bg: '#180b05',
          tire: '#241209',
          deep: '#622b14',
          copper: '#c08a55',
          muted: '#978f66',
          body: '#cdbf94',
          cream: '#e4d6a9',
          ink: '#f3ecd6',
        },
      },
      fontFamily: {
        heading: ['Poppins','sans-serif'],
        body: ['Inter','sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
