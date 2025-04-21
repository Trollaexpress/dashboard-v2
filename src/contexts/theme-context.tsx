'use client';

import React, {createContext, useState, useContext, useEffect} from 'react';
import {useTheme} from 'next-themes';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  mounted: boolean;
  isDarkTheme: boolean;
  isLightTheme: boolean;

  error: string | null;
  clearError: string | null;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: mounted ? theme || 'system' : 'system', // Use system as fallback during SSR
        setTheme,
        toggleTheme,
        mounted,
        isDarkTheme: theme === 'dark',
        isLightTheme: theme === 'light',
        error: null,
        clearError: null,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider',
    );
  }

  return context;
};
