import type { Config } from "tailwindcss";

const { join } = require('path');

const config: Config = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./app/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
