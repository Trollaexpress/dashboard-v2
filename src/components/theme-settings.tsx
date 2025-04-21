'use client';

import {useState} from 'react';
import {useTheme} from '@/hooks/use-theme';
import {Button} from '@/components/ui/button';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import {Slider} from '@/components/ui/slider';
import {safeSetLocalStorage} from '@/lib/utils';

/**
 * Theme Settings Component
 *
 * A component that provides advanced theme settings.
 * Allows users to configure theme preferences.
 *
 * @returns A theme settings component
 */
export function ThemeSettings() {
  const {theme, setTheme, isDarkTheme} = useTheme();
  const [systemSync, setSystemSync] = useState(theme === 'system');
  const [transitionSpeed, setTransitionSpeed] = useState(200);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handle system sync toggle
   */
  const handleSystemSyncToggle = (checked: boolean) => {
    try {
      if (checked) {
        setTheme('system');
        setSystemSync(true);
      } else {
        setTheme(isDarkTheme ? 'dark' : 'light');
        setSystemSync(false);
      }
      setError(null);
    } catch (err) {
      console.error('Failed to toggle system sync:', err);
      setError('Failed to toggle system sync');
    }
  };

  /**
   * Handle transition speed change
   */
  const handleTransitionSpeedChange = (value: number[]) => {
    try {
      const speed = value[0];
      setTransitionSpeed(speed);

      // Apply transition speed to document
      document.documentElement.style.setProperty(
        '--theme-transition-speed',
        `${speed}ms`,
      );

      // Save preference
      safeSetLocalStorage('theme-transition-speed', speed.toString());

      setError(null);
    } catch (err) {
      console.error('Failed to set transition speed:', err);
      setError('Failed to set transition speed');
    }
  };

  return (
    <div className="space-y-6">
      {/* Error message */}
      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-3 rounded-md">
          {error}
        </div>
      )}

      {/* Theme selection */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Theme
        </h3>
        <div className="flex space-x-2">
          <Button
            variant={theme === 'light' && !systemSync ? 'default' : 'outline'}
            onClick={() => {
              setTheme('light');
              setSystemSync(false);
            }}
            className="flex-1">
            Light
          </Button>
          <Button
            variant={theme === 'dark' && !systemSync ? 'default' : 'outline'}
            onClick={() => {
              setTheme('dark');
              setSystemSync(false);
            }}
            className="flex-1">
            Dark
          </Button>
        </div>
      </div>

      {/* System sync toggle */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="system-sync">Sync with system</Label>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Automatically match your system's theme preference
          </p>
        </div>
        <Switch
          id="system-sync"
          checked={systemSync}
          onCheckedChange={handleSystemSyncToggle}
        />
      </div>

      {/* Transition speed slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="transition-speed">Transition Speed</Label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {transitionSpeed}ms
          </span>
        </div>
        <Slider
          id="transition-speed"
          min={0}
          max={500}
          step={50}
          value={[transitionSpeed]}
          onValueChange={handleTransitionSpeedChange}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Adjust how quickly the theme changes when toggled
        </p>
      </div>
    </div>
  );
}
