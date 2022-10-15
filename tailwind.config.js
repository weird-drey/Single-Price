/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./dist/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: "Karla"
      },
    },
  },
  plugins: [],
}
