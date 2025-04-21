'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useRouter, usePathname} from 'next/navigation';
import {useState} from 'react';
import {
  ChevronDown,
  ChevronUp,
  Users,
  LayoutDashboard,
  Truck,
  Package,
  Route,
  BarChart3,
  CreditCard,
  HeadphonesIcon,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [error, setError] = useState<string | null>(null);
  const [membersOpen, setMembersOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to handle navigation
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    try {
      router.push(href);
      if (window.innerWidth < 1024) {
        setMobileOpen(false);
      }
    } catch (error:any) {
      setError('Navigation failed. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  // Construct navigation items
  const navItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: LayoutDashboard,
      active: pathname === '/',
    },
    {
      name: 'Members',
      href: '#',
      icon: Users,
      active: pathname?.includes('/members'),
      hasChildren: true,
      open: membersOpen,
      children: [
        {
          name: 'Loaders',
          href: '/members/loaders',
          active: pathname === '/members/loaders',
        },
        {
          name: 'Partners',
          href: '/members/partners',
          active: pathname === '/members/partners',
        },
        {
          name: 'Drivers',
          href: '/members/drivers',
          active: pathname === '/members/drivers',
        },
      ],
    },
    {
      name: 'Fleet Management',
      href: '/fleet',
      icon: Truck,
      active: pathname === '/fleet',
    },
    {
      name: 'Shipments',
      href: '/shipments',
      icon: Package,
      active: pathname === '/shipments',
    },
    {
      name: 'Route',
      href: '/route',
      icon: Route,
      active: pathname === '/route',
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart3,
      active: pathname === '/analytics',
    },
    {
      name: 'Billing',
      href: '/billing',
      icon: CreditCard,
      active: pathname === '/billing',
    },
  ];

  // Toggle members dropdown
  const toggleMembers = () => {
    setMembersOpen(!membersOpen);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile menu toggle button - only visible on small screens */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-[#242c41] shadow-md"
        aria-label="Toggle menu">
        {mobileOpen ? (
          <X className="h-6 w-6 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
        )}
      </button>

      {/* Show error message if navigation fails */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 dark:bg-red-900/80 text-red-800 dark:text-red-200 p-3 rounded-md shadow-md z-50">
          {error}
          <button
            className="ml-2 font-bold"
            onClick={() => setError(null)}
            aria-label="Dismiss error">
            ×
          </button>
        </div>
      )}

      {/* Sidebar overlay for mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`sidebar h-screen fixed lg:static bg-white dark:bg-[#0f172a] border-r border-gray-200 dark:border-[#242c41] z-40 transition-all duration-300 flex flex-col ${mobileOpen ? 'left-0' : '-left-full lg:left-0'}`}
        style={{
          width: isCollapsed ? '64px' : '240px',
          minWidth: isCollapsed ? '64px' : '240px',
        }}>
        <div className="p-3 flex-1 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center mb-6 mt-4 lg:mt-0 justify-center">
            <Image
              src="/trolla-logo.png"
              alt="Trolla Logo"
              width={isCollapsed ? 32 : 120}
              height={isCollapsed ? 32 : 28}
              className="rounded-md"
            />
          </div>
          {/* Collapse toggle button - now attached to the sidebar */}
          <div className="flex justify-end pr-2 pb-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="bg-white dark:bg-[#242c41] border border-gray-200 dark:border-[#242c41] rounded-full p-1 shadow-md hover:bg-gray-50 dark:hover:bg-[#1e2537] transition-colors"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4 text-gray-500 dark:text-[#6d7484]" />
              ) : (
                <ChevronLeft className="h-4 w-4 text-gray-500 dark:text-[#6d7484]" />
              )}
            </button>
          </div>

          {/* Main navigation */}
          <nav className="flex flex-col space-y-1" aria-label="Main Navigation">
            {navItems.map(item => (
              <div key={item.name}>
                {item.hasChildren ? (
                  <div className="flex flex-col">
                    <button
                      type="button"
                      aria-expanded={membersOpen ? 'true' : 'false'}
                      onClick={toggleMembers}
                      className={`flex items-center justify-between w-full h-[50px] rounded-md text-xs transition-colors duration-200 ${item.active ? 'bg-[#5d5fef]/10 text-[#5d5fef] dark:bg-[#242c41] dark:text-white' : 'text-gray-500 dark:text-[#6d7484] hover:bg-gray-100 dark:hover:bg-[#1e2537] hover:text-[#5d5fef] dark:hover:text-white'}`}>
                      <div className="flex items-center">
                        <item.icon
                          className={`h-4 w-4 ml-3 ${item.active ? 'text-[#5d5fef] dark:text-white' : ''}`}
                          aria-hidden="true"
                        />
                        {!isCollapsed && (
                          <span className="ml-2 text-xs">{item.name}</span>
                        )}
                      </div>
                      {!isCollapsed &&
                        (membersOpen ? (
                          <ChevronUp className="h-3 w-3 mr-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3 mr-3" />
                        ))}
                    </button>

                    {/* Dropdown menu */}
                    {membersOpen && !isCollapsed && (
                      <div className="ml-8 pl-2 border-l border-gray-200 dark:border-[#242c41] mt-1 mb-1">
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={e => handleNavigation(e, child.href)}
                            className={`flex items-center w-full h-[36px] rounded-md text-xs transition-colors duration-200 ${child.active ? 'text-[#5d5fef] dark:text-white' : 'text-gray-500 dark:text-[#6d7484] hover:text-[#5d5fef] dark:hover:text-white'}`}
                            aria-current={child.active ? 'page' : undefined}>
                            <span className="ml-1 text-xs">• {child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={e => handleNavigation(e, item.href)}
                    className={`flex items-center w-full h-[50px] rounded-md text-xs transition-colors duration-200 ${item.active ? 'bg-[#5d5fef]/10 text-[#5d5fef] dark:bg-[#242c41] dark:text-white' : 'text-gray-500 dark:text-[#6d7484] hover:bg-gray-100 dark:hover:bg-[#1e2537] hover:text-[#5d5fef] dark:hover:text-white'}`}
                    aria-current={item.active ? 'page' : undefined}>
                    <item.icon
                      className={`h-4 w-4 ml-3 ${item.active ? 'text-[#5d5fef] dark:text-white' : ''}`}
                      aria-hidden="true"
                    />
                    {!isCollapsed && (
                      <span className="ml-2 text-xs">{item.name}</span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer items */}
        <div className="border-t border-gray-200 dark:border-[#242c41] p-3 w-full">
          <div className="flex space-x-1">
            <Link
              href="/support"
              className="flex items-center w-1/2 justify-center py-2 text-[11px] text-gray-500 dark:text-[#6d7484] hover:text-[#5d5fef] dark:hover:text-white">
              <HeadphonesIcon className="h-3 w-3" />
              {!isCollapsed && <span className="ml-1">Support</span>}
            </Link>
            <Link
              href="/settings"
              className="flex items-center w-1/2 justify-center py-2 text-[11px] text-gray-500 dark:text-[#6d7484] hover:text-[#5d5fef] dark:hover:text-white">
              <Settings className="h-3 w-3" />
              {!isCollapsed && <span className="ml-1">Settings</span>}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
