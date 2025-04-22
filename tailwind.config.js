/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bbfc',
          400: '#8099f8',
          500: '#6477f2',
          600: '#4a58e5',
          700: '#3d47c9',
          800: '#343ca0',
          900: '#2e377e',
          950: '#1c2153',
        },
        // Secondary
        indigo: {
          50: '#f3f4ff',
          100: '#e8eaff',
          200: '#d4d7ff',
          300: '#b7b9ff',
          400: '#9292ff',
          500: '#7269fa',
          600: '#6246ef',
          700: '#5435d8',
          800: '#472cae',
          900: '#3c2a8b',
          950: '#231856',
        },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};