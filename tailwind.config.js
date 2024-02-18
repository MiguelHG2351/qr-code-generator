/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3662E3',
        'secondary': '#111729',
        'white': '#F2F5F9',
        'custom-gray': '#364153',
        'light-gray': '#4e80ee33',
      }
    },
  },
  plugins: [],
}

