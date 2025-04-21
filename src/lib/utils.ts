import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 *
 * This function combines clsx and tailwind-merge to provide a convenient way
 * to conditionally apply Tailwind CSS classes while properly handling conflicts.
 *
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns A string of merged Tailwind CSS classes
 *
 * @example
 * ```tsx
 * <div className={cn(
 *   "base-class",
 *   isActive && "active-class",
 *   variant === "primary" ? "primary-class" : "secondary-class"
 * )}>
 *   Content
 * </div>
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as a percentage
 *
 * @param value - The value to format (0-1)
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format a date to a readable string
 *
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  const d =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;

  return new Intl.DateTimeFormat('en-US', options).format(d);
}

/**
 * Check if the current environment is a browser
 *
 * @returns Boolean indicating if code is running in a browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Safely access local storage with error handling
 *
 * @param key - Storage key
 * @returns The stored value or null if not found/error
 */
export function safeLocalStorage(key: string): string | null {
  if (!isBrowser()) return null;

  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Local storage access error:', error);
    return null;
  }
}

/**
 * Safely set a value in local storage with error handling
 *
 * @param key - Storage key
 * @param value - Value to store
 * @returns Boolean indicating success
 */
export function safeSetLocalStorage(key: string, value: string): boolean {
  if (!isBrowser()) return false;

  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error('Local storage write error:', error);
    return false;
  }
}

/**
 * Safely gets a value from localStorage with error handling
 *
 * @param key - Storage key
 * @param defaultValue - Default value to return if key is not found or error occurs
 * @returns The stored value or the default value
 */
export function safeGetLocalStorage(
  key: string,
  defaultValue: string = '',
): string {
  if (!isBrowser()) return defaultValue;

  try {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    return defaultValue;
  }
}
