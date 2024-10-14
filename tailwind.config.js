/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins"],
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
