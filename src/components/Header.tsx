'use client';

import Image from 'next/image';
import { Menu, Search, Bell, Settings as SettingsIcon } from 'lucide-react';

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-[#1C1F2E] border-b border-gray-700 px-4 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <button className="text-white" onClick={onToggleSidebar}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      
      <div className="flex-1 flex items-center justify-center gap-4 sm:gap-6">
        
        <div className="relative w-[180px] sm:w-[220px] md:w-[180px] ml-0 md:ml-40">

          <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4 " />
          <input
            type="text"
            placeholder="Search loads, drivers, trips..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[#2E3147] text-sm text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        
        <div className="hidden md:flex gap-2">
          {['Overview', 'Operations', 'Tracking'].map((tab) => (
            <button
              key={tab}
              className="bg-[#2E3147] hover:bg-indigo-500 text-white text-sm px-4 py-1.5 rounded-md transition whitespace-nowrap"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      
      <div className="flex items-center gap-2 sm:gap-3">
        
        <div className="hidden md:flex gap-2">
          {['Load', 'Partner', 'Driver'].map((label) => (
            <button
              key={label}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap"
            >
              + New {label}
            </button>
          ))}
        </div>

        
        <div className="flex items-center gap-2 ml-2 sm:ml-3">
          <Bell className="text-white w-5 h-5 cursor-pointer" />
          <SettingsIcon className="text-white w-5 h-5 cursor-pointer" />
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer">
            S
          </div>
        </div>
      </div>
    </header>
  );
}

