/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,md,mdx}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
