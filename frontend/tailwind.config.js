/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      'muted-foreground': '#6b7280', // Tailwind gray-500
    }
  }
},
  plugins: [],
}
