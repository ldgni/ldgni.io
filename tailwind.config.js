/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#09090b",
      },
      colors: {
        primary: "#fafafa",
        secondary: "#a1a1aa",
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
