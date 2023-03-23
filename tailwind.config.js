/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heartBg: "url('../public/heart.png')",
        blueTri: "url('../public/bluetri.png')",
      },
    },
  },
  plugins: [],
};
