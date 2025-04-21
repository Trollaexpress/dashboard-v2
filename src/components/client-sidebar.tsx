'use client';

import {useState, useEffect} from 'react';
import {Sidebar} from '@/components/sidebar';

export default function ClientSidebar() {
  const [mounted, setMounted] = useState(false);

  // Mount component on client-side only
  useEffect(() => {
    setMounted(true);

    // Debug theme changes
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
  }, []);

  if (!mounted) return null;

  return <Sidebar />;
}
