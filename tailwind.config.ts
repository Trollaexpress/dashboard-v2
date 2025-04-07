// tailwind.config.ts
import type { Config } from 'tailwindcss';
import colors from './src/styles/colors'; 

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        trolla: colors.trolla,
      },
    },
  },
  plugins: [],
};

export default config;