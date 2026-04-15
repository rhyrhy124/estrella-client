/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ enables dark mode toggle
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: "#ec4899", // optional custom color (pink-500)
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // optional modern font
      },
      keyframes: {
        fadeSlideDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlideDown: "fadeSlideDown 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};