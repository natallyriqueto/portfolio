/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        maxW: '90rem'
      },
      width: {
        200: '13rem',
        500: '31.25rem',
        762: '47.6rem',
        384: '24rem'
      },
      height: {
        xs: '2px',
      },
      gap: {
        xl: '5rem' //80px
      },
      fontSize: {
        'body-lg': '1rem',
        'body': '.875rem',
      },
      fontFamily: {
        inter: 'Inter'
      },
      screens: {
        'tablet': '650px', //@media (min-width: 640px) { ... }
        'laptop': '1024px',  
        'desktop': '1580px',
      },
    },
  },
  plugins: [],
}