'use client';

import {useThemeContext} from '@/contexts/theme-context';

/**
 * Custom hook to use the theme functionality
 *
 * This hook provides easy access to theme-related functions and state.
 * It wraps the theme context with error handling and debug logging.
 *
 * @returns Theme-related state and functions
 */
export function useTheme() {
  const {
    theme,
    setTheme,
    toggleTheme,
    isDarkTheme,
    isLightTheme,
    mounted,
    error,
    clearError,
  } = useThemeContext();

  // Wrapped functions with debug logging
  const wrappedSetTheme = (newTheme: string) => {
    console.log(`Setting theme to: ${newTheme}`);
    setTheme(newTheme);
    // Force apply theme class as a fallback mechanism
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const wrappedToggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    console.log(`Toggling theme from ${theme} to ${newTheme}`);
    toggleTheme();

    // Force apply theme class as a fallback mechanism
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return {
    theme,
    setTheme: wrappedSetTheme,
    toggleTheme: wrappedToggleTheme,
    isDarkTheme,
    isLightTheme,
    mounted,
    error,
    clearError,
  };
}
