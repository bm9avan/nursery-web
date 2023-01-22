/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-pea': {
          DEFAULT: '#227739',
          50: '#E3F7E8',
          100: '#C8EFD2',
          200: '#90DFA4',
          300: '#59CF78',
          400: '#32AE53',
          500: '#227739',
          600: '#1A5B2C',
          700: '#123F1F',
          800: '#0A2411',
          900: '#020804'
        },
      },
    },
  },
  plugins: [],
}
