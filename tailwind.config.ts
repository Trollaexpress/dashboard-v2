// tailwind.config.ts
import type {Config} from 'tailwindcss';
import colors from './src/styles/colors';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        trolla: colors.trolla,
        gray: colors.gray,
        indigo: colors.indigo,
        blue: colors.blue,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        white: colors.white,
      },
    },
  },
  plugins: [],
};

export default config;
