'use client';

import {useEffect, useState} from 'react';
import {
  Home,
  Users,
  Truck,
  Package,
  Map,
  BarChart,
  CreditCard,
  LifeBuoy,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Image from 'next/image';

const NAV_ITEMS = [
  {name: 'Dashboard', icon: <Home />, path: '/dashboard'},
  {name: 'Members', icon: <Users />, path: '/members'},
  {name: 'Fleet Management', icon: <Truck />, path: '/fleet'},
  {name: 'Shipments', icon: <Package />, path: '/shipments'},
  {name: 'Route', icon: <Map />, path: '/route'},
  {name: 'Analytics', icon: <BarChart />, path: '/analytics'},
  {name: 'Billing', icon: <CreditCard />, path: '/billing'},
  {name: 'Support', icon: <LifeBuoy />, path: '/support'},
  {name: 'Settings', icon: <Settings />, path: '/settings'},
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const sidebarWidth = isCollapsed ? 'w-20' : 'w-64';

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          ${sidebarWidth} fixed inset-y-0 left-0 z-50
          bg-[#1C1F2E] text-white border-r border-gray-700
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:flex lg:flex-col
        `}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <div className="flex justify-center items-center w-full">
            <Image
              src={isCollapsed ? '/trolla-t.png' : '/trolla-logo.png'}
              alt="Trolla Logo"
              width={isCollapsed ? 30 : 120}
              height={40}
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setCollapsed(v => !v)}
            className="text-gray-400 hover:text-white lg:block hidden">
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white lg:hidden block">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="px-2 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive
                      ? 'bg-[#2E3147] text-white shadow-inner'
                      : 'text-gray-400 hover:bg-[#2E3147] hover:text-white'
                  }
                `}>
                {item.icon}
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
