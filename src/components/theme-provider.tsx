'use client';

import {ThemeProvider as NextThemesProvider} from 'next-themes';
import type {ThemeProviderProps} from 'next-themes';
import {useEffect} from 'react';

/**
 * ThemeProvider Component
 *
 * Wraps the application with next-themes provider to enable theme switching functionality.
 * Handles theme persistence and system preference detection.
 *
 * @param props - Standard ThemeProviderProps from next-themes plus children
 * @returns A theme provider component that wraps children
 */
export function ThemeProvider({children, ...props}: ThemeProviderProps) {
  // Add better error handling and theme initialization
  useEffect(() => {
    // Log theme initialization for debugging
    console.log('ThemeProvider initialized with props:', props);

    // Fallback mechanism if theme switching fails
    const handleStorageError = () => {
      console.warn(
        'Local storage access denied. Theme persistence may not work.',
      );
    };

    try {
      // Test localStorage access
      localStorage.getItem('theme');
    } catch (e: unknown) {
      // Handle potential errors accessing localStorage
      console.error('Error accessing localStorage:', e);
      handleStorageError();
    }

    // Ensure the theme class is applied correctly on initial load
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const savedTheme = localStorage.getItem('theme');

    console.log('Theme initialization -', {
      savedTheme,
      isDarkMode,
      currentClass: document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light',
    });

    if (savedTheme === 'dark' || (!savedTheme && isDarkMode)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Monitor theme changes for debugging
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          console.log(
            'Theme class changed:',
            document.documentElement.className,
          );
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [props]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
