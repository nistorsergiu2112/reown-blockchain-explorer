/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Include Next.js app directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Include components directory
    './src/**/*.{js,ts,jsx,tsx}', // Include everything in `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};