/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#111110",
        accent: "#222222",
      },
      colors: {
        primary: "#fafafa",
        secondary: "#b5b3ad",
        accent: "#505050",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
