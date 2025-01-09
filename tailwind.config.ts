import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#110606",
          white: "#FFFFFF",
          main: "#D50F0F",
          secondary: "#FEECEC",
          grayish: "#3C3C4399",
          ash: "#B5C9DB",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
