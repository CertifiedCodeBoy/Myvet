/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo3': "url('./src/Assets/slideshowImages/2.jpeg')",
        'logo2': "url('./src/Assets/slideshowImages/5.jpeg')",
        'logo': "url('./src/Assets/photo_2024-05-02_14-36-10.jpg')",
      }),
      colors: {
        primary: "#A0887F",
        secondary: "#F2F2F2",
        third: "#FFD700",
        bord: "rgba(255, 255, 255, .5)",  
      },
      transitionProperty: {
          'height': 'height',
        },
      fontFamily: {
        main: ["poppins", "sans-serif"],
      },
      boxShadow: {
        'custom-light': '0 0 30px rgba(255, 255, 255, .5)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}

