
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'min': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'min': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '1024px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'min': '375px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        'primary': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-600": "#F47B56",
        "primary-500": "#999A1C",
        "primary-400": "#F2F2F2",
        "primary-300": "#F2F4FF",
        "primary-200": "#FFFFFF",
        "secondary-500": "#E8E8EA",
        "secondary-400": "#3E2928",
        "secondary-300": "#4B4C5F",
        "secondary-200": "#68E1FD",
        "secondary-100": "#FF8F6F",
        "tertiary-500": "#E8E8EA",
        "tertiary-400": "#E8E8EA",
        "tertiary-300": "#F2F2F2",
        "tertiary-200": "#1E1F36",
        "tertiary-100": "#787887",
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
    },
  },
  plugins: [],
}