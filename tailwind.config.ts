import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: { max: "768px" },
      xlg: { max: "976px" },
      xmd: { max: "1250px" },

      md: "769px",
      lg: "977px",
      l: "1251px",
      xl: "1441px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      green: "#009245",
      red: "#EF4325",
      textBlack: "#222222",
      bgDark: "#212121",
      textOrange: "#EF4325",
      textDarker: "#333333",
      textDark: "#757575",
      white: "#ffffff",
      black: "#000000",
      error: "#df1c36",
    },
  },
  plugins: [],
};
export default config;
