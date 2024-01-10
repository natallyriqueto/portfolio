/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        maxW: "90rem"
      },
      gap: {
        xl: '5rem'
      },
      fontFamily: {
        inter: 'Inter'
      }
    },
  },
  plugins: [],
}