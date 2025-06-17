import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0e0e0e',
        'beige-text': '#d9c2a7', 
        'gray-accent': '#666666',
        'card-bg': '#1c1c1c',
      },

      fontFamily: {
        'custom-serif': ['"Playfair Display", serif'], 
        'custom-sans': ['"Inter", sans-serif'], 
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

