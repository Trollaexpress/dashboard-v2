import type { Config } from "tailwindcss";
import colors from './src/styles/colors'

const config: Config =({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors
      },
    },
  },
  plugins: [],
});

export default config;
