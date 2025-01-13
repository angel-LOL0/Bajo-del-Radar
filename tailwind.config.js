/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimary: "#00A9FF",
        lightSecondary: "#89CFF3",
        lightTertiary: "#A0E9FF",
        lighFourth: "#CDF5FD",
        darkPrimary: "#000000",
        darkSecondary: "#150050",
        darkTertiary: "#3F0071",
        darkFourth: "#FB2576",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
