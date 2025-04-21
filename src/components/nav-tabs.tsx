'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface Tab {
  label: string;
  value: string;
  href: string;
}

interface NavTabsProps {
  tabs: Tab[];
}

export function NavTabs({tabs}: NavTabsProps) {
  const pathname = usePathname();

  return (
    <div className="flex space-x-1 bg-gray-100 dark:bg-dark-background-tertiary p-1 rounded-lg">
      {tabs.map(tab => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.value}
            href={tab.href}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-colors
              ${
                isActive
                  ? 'bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-dark-text-muted hover:text-gray-900 dark:hover:text-white'
              }
            `}>
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
