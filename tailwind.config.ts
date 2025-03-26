import type { Config } from 'tailwindcss';
import colors from './src/styles/colors'; 

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        ...colors, 
      },
    },
  },
  plugins: [],
};

export default config;
