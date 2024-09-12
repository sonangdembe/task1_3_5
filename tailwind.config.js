/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your JSX files for classes
  ],
  theme: {
    extend: {
      fontFamily:{
        'garamond' :["EB Garamond"]
      },
      width: {
        'custom-lg-w': '40rem',
      },
      height: {
        'custom-lg-h': '20rem',
      },
      backgroundColor: {
        'custom-transparent': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
