/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#182CD4',
          light: '#EEEEEE',
          secondary: '#C4FA6F',
          dark: '#3A3F47',
          black: '#282828'
        },
      },
    },
    plugins: [],
  };