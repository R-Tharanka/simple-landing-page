/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-600": "var(--neutral-600)",
      },
      fontFamily: {
        "body-1": "var(--body-1-font-family)",
        "poppins-h3-poppins-27px-semibold":
          "var(--poppins-h3-poppins-27px-semibold-font-family)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
