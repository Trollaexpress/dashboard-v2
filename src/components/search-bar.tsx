'use client';

import {Search} from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400 dark:text-dark-text-muted" />
      </div>
      <input
        type="search"
        className="block w-full p-2 pl-10 text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-dark-background-tertiary rounded-md border border-gray-200 dark:border-dark-background-secondary focus:ring-2 focus:ring-ui-purple-light focus:border-ui-purple-light outline-none"
        placeholder="Search..."
      />
    </div>
  );
}
