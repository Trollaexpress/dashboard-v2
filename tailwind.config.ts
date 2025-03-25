import type { Config } from 'tailwindcss';
import colors from './src/styles/colors';

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};

export default config;
