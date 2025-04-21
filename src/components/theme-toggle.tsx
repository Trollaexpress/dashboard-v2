'use client';

import {useThemeContext} from '@/contexts/theme-context';
import {Moon, Sun} from 'lucide-react';

export function ThemeToggle() {
  // Use mounted state from context to ensure consistency
  const {theme, toggleTheme, mounted} = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white p-2 rounded-full text-sm font-medium flex items-center justify-center border border-gray-200 dark:border-dark-background-tertiary w-8 h-8">
      {/* Only render icon after component is mounted */}
      {mounted ? (
        theme === 'dark' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        // This prevents hydration issues by showing nothing during SSR
        <span className="h-4 w-4"></span>
      )}
    </button>
  );
}
