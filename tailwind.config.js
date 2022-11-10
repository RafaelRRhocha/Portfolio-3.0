/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    'sm': '360px',
    // => @media (min-width: 360px)
    
    'md': '820px',
    // => @media (min-width: 820px)
    
    'lg': '1366px',
    // => @media (min-width: 1366px)
    
    'xl': '1920px',
    // => @media (min-width: 1920px
  },
  plugins: [],
}
