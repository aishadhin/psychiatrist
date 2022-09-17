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
          primary: "#26ABA3",
          secondary: "#F7AB1E",
          accent: "#293039",
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
