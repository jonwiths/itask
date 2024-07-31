/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    screens: {
      xs: "370px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        titleGreen: "#3EAF3C",
        lightGreen: "#ADEFD1",
        darkBlue: "#00203F",
        mainPurple: "#42419F",
      },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
