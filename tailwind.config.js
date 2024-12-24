/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00C895',
        'brand-dark': '#00B085',
        'brand-light': '#00E0A5',
      },
    },
  },
  plugins: [],
};