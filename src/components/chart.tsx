'use client';

import React from 'react';
// import {useTheme} from '@/hooks/use-theme';
// import colors from '@/styles/colors';

interface ChartProps {
  height?: number;
}

export function Chart({height = 200}: ChartProps) {
  // const {isDarkTheme} = useTheme();

  // This is a placeholder for the actual chart implementation

  return (
    <div
      style={{height: `${height}px`}}
      className="w-full bg-gray-50 dark:bg-dark-background-tertiary rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-sm text-gray-500 dark:text-dark-text-muted mb-2">
          Chart Placeholder
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-ui-purple"></div>
          <div className="w-3 h-3 rounded-full bg-ui-green"></div>
          <div className="w-3 h-3 rounded-full bg-ui-yellow"></div>
        </div>
      </div>
    </div>
  );
}
