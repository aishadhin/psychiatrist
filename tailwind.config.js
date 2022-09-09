/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#FF7A70",
          secondary: "#469FE2",
          accent: "#4D6682",
          neutral: "#4D6682",
          "base-100": "#ECF4FA",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
