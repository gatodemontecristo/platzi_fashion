/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      HelveticaFashion: ["HelveticaNeue", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#000000",
        secondary: "#8FA206",
      }),
      textColor: {
        primary: "##FFFFFF",
        secondary: "#8FA206",
      },

    },
  },
  plugins: [],
}

