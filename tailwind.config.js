/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      shadow: {
        classic: '1px 1px 2px #fff',
        
      }
    },
  },
  plugins: [],
}