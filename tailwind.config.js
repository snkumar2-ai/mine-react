/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFC4C4',
        'warm-pastel': '#FFD6A5',
        'soft-teal': '#A0E7E5',
        'deep-purple': '#6A4C93',
        'deep-blue': '#355070',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
