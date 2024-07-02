
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "Soft_red": "hsl(10, 79%, 65%)",
      "light_soft_red" : "hsl(12, 82%, 70%)",
      "Cyan": "hsl(186, 34%, 60%)",
      "light_cyan" : "hsl(194, 40%, 70%)",
      "Dark_brown": "hsl(25, 47%, 15%)",
      "Medium_brown": "hsl(28, 10%, 53%)",
      "Cream": "hsl(27, 66%, 92%)",
      "Very_pale_orange": "hsl(33, 100%, 98%)"
    },
    fontFamily: {
      "font_family_DM": "DM Sans, sans-serif"
    }
  },
  plugins: [],
}
