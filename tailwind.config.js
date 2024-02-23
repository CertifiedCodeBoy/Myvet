/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#544540",
        secondary: "#F2F2F2",
        third: "#FFD700",
        bord: "rgba(255, 255, 255, .5)",  
      },
      fontFamily: {
        main: ["Roboto"],
      },
      boxShadow: {
        'custom-light': '0 0 30px rgba(255, 255, 255, .5)',
      },
    },
  },
  plugins: [],
}

