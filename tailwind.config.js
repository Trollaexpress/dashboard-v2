import colors from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        trolla: colors.trolla,
        ui: colors.ui,
        dark: colors.dark,
        success: colors.success,
        error: colors.error,
        warning: colors.warning,
        info: colors.info,
      },
    },
  },
  plugins: [],
};
