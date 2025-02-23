import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundColor: {
        light: "#fcfcfc",
        dark: "#1a1a1a",
      },
      textColor: {
        light: "#e5e5e5",
        dark: "#3a3a3a",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
