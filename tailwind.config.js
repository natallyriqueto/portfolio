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
      },
      screens: {
        'tablet': '650px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1580px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}