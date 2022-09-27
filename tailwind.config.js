module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bangers': ['"Bangers"', 'cursive'],
        'archivo': ['"Archivo Narrow"', 'sans-serif'],
      },
      colors: {
      'twang': '#FF9494',
      'twang-light':'#FFD1D1',
      'twang-lightest':'#FFE3E1',
      'mellow':'#FFF5E4'
      }
    },
  },
  plugins: [],
};
