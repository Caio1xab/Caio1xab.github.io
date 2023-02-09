/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
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
