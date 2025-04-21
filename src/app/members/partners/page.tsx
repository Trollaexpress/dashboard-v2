'use client';

import {SearchBar} from '@/components/search-bar';
// import {useState} from 'react';
import {Plus} from 'lucide-react';

export default function PartnersPage() {
  // const [mounted, setMounted] = useState(false);

  // Mock data for partners
  const partners = [
    {
      id: 'PTR-7812',
      name: 'Sai Transport Services',
      location: 'Mumbai, MH',
      vehicles: '47',
      status: 'Active',
      rating: '4.8',
    },
    {
      id: 'PTR-5921',
      name: 'Ganesh Logistics',
      location: 'Delhi, DL',
      vehicles: '32',
      status: 'Active',
      rating: '4.5',
    },
    {
      id: 'PTR-2347',
      name: 'Krishna Transport Co.',
      location: 'Bangalore, KA',
      vehicles: '28',
      status: 'Active',
      rating: '4.7',
    },
    {
      id: 'PTR-3489',
      name: 'Shiva Roadways',
      location: 'Chennai, TN',
      vehicles: '19',
      status: 'Pending',
      rating: '4.3',
    },
  ];

  return (
    <div className="p-6">
      {/* Top section with search and tabs */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-[300px]">
          <SearchBar />
        </div>
        <div className="flex space-x-2">
          <button className="bg-[#5d5fef] hover:bg-[#4b4de0] text-white px-4 py-2 rounded-md text-sm font-medium">
            Loaders
          </button>
          <button className="bg-[#5d5fef] hover:bg-[#4b4de0] text-white px-4 py-2 rounded-md text-sm font-medium">
            Partners
          </button>
          <button className="bg-[#5d5fef] hover:bg-[#4b4de0] text-white px-4 py-2 rounded-md text-sm font-medium">
            Drivers
          </button>
          <button className="bg-[#2a2d3c] hover:bg-[#3a3e52] text-white px-4 py-2 rounded-md text-sm font-medium">
            Quick Actions
          </button>
        </div>
      </div>

      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            Partners
            <span className="text-sm font-normal text-gray-500 dark:text-dark-text-muted ml-2">
              Manage all your transportation partners and their operations
            </span>
          </h1>
        </div>
        <div className="flex space-x-2">
          <button className="bg-[#5d5fef] hover:bg-[#4b4de0] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
            <Plus className="h-4 w-4 mr-1" /> Add Partner
          </button>
          <button className="bg-[#2a2d3c] hover:bg-[#3a3e52] text-white px-4 py-2 rounded-md text-sm font-medium">
            Import Partners
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-[#1e293b] rounded-lg p-4 shadow-sm">
          <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
            Total Partners
          </h3>
          <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
            110
          </p>
          <div className="mt-2">
            <span className="text-xs font-medium text-[#4ade80]">
              +5% this month
            </span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e293b] rounded-lg p-4 shadow-sm">
          <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
            Active Partners
          </h3>
          <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
            97
          </p>
          <div className="mt-2">
            <span className="text-xs font-medium text-[#4ade80]">
              +3% this month
            </span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e293b] rounded-lg p-4 shadow-sm">
          <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
            Pending Verification
          </h3>
          <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
            13
          </p>
          <div className="mt-2">
            <span className="text-xs font-medium text-[#f97316]">
              Needs review
            </span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e293b] rounded-lg p-4 shadow-sm">
          <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
            Partner Performance
          </h3>
          <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
            4.7/5.0
          </p>
          <div className="mt-2">
            <span className="text-xs font-medium text-[#4ade80]">
              +0.2 from last month
            </span>
          </div>
        </div>
      </div>

      {/* Partners list section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-900 dark:text-white font-medium">
            Partners List
          </h2>
          <div className="flex space-x-2">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search partners..."
                className="w-full pl-8 pr-4 py-2 bg-white dark:bg-[#1e293b] border border-gray-300 dark:border-[#3a3e52] rounded-md text-sm focus:outline-none focus:border-[#5d5fef]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <button className="bg-[#2a2d3c] hover:bg-[#3a3e52] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
            <button className="bg-[#2a2d3c] hover:bg-[#3a3e52] text-white px-4 py-2 rounded-md text-sm font-medium">
              Bulk Actions
            </button>
          </div>
        </div>

        {/* Partners table */}
        <div className="bg-white dark:bg-[#1e293b] rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#1e293b] text-left">
              <tr className="border-b border-gray-200 dark:border-[#3a3e52]">
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Partner ID
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Partner Name
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Location
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Vehicles
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Rating
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {partners.map(partner => (
                <tr
                  key={partner.id}
                  className="border-b border-gray-200 dark:border-[#3a3e52] hover:bg-gray-50 dark:hover:bg-[#2a2d3c]">
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {partner.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {partner.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {partner.location}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {partner.vehicles}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        partner.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-900 dark:text-white">
                        {partner.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button
                        title="details"
                        className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        </svg>
                      </button>
                      <button
                        title="remove"
                        className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <button
                        title="more actions"
                        className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
