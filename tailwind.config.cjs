/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FBA91A",
        silver: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
