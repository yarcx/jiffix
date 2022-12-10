// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         jiffix: {
//             primary: '#FBA91A', // dark-orange
//             secondary: '#E6E6E6', // gray
//             pink: '#D95F76',
//         },
//     },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FBA91A", // dark-orange
        secondary: "#E6E6E6", // gray
        lightGray: "#f2f2f2",
        lightPink: "#FBA91A",
        silver: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
