/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clearYellow: "#FACC15",
        color1: "#2C74B3",
        color2: "#205295",
        color3: "#144272",
        color4: "#0A2647",
      },

      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
