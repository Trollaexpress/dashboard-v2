'use client';

import {ActivityItem} from '@/components/activity-item';
import {Chart} from '@/components/chart';
import {NavTabs} from '@/components/nav-tabs';
import {SearchBar} from '@/components/search-bar';
import {ThemeToggle} from '@/components/theme-toggle';
// import {useThemeContext} from '@/contexts/theme-context';
// import colors from '@/styles/colors';
import {Bell, Plus} from 'lucide-react';
// import {useState, useEffect} from 'react';

export default function Dashboard() {
  // const {toggleTheme, theme} = useThemeContext();
  // const [mounted, setMounted] = useState(false);
  

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="w-full md:w-[300px]">
          <SearchBar />
        </div>
        <div className="w-full md:w-auto overflow-x-auto">
          <NavTabs
            tabs={[
              {label: 'Overview', value: 'overview', href: '/'},
              {label: 'Operations', value: 'operations', href: '/operations'},
              {label: 'Tracking', value: 'tracking', href: '/tracking'},
            ]}
          />
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <ThemeToggle />

          <button type='button'  className="relative">
            <Bell className="h-5 w-5 text-gray-400 dark:text-dark-text-muted" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-ui-red rounded-full text-[10px] flex items-center justify-center text-white">
              3
            </span>
          </button>
          <div className="w-8 h-8 rounded-full bg-ui-purple flex items-center justify-center text-white font-medium">
            S
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Welcome back, Sanchit
            </h1>
            <p className="text-gray-500 dark:text-dark-text-muted text-sm">
              Today is Wednesday, 09 April 2023
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-ui-purple hover:bg-ui-purple-dark text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <Plus className="h-4 w-4 mr-1" /> New Load
            </button>
            <button className="bg-ui-purple hover:bg-ui-purple-dark text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <Plus className="h-4 w-4 mr-1" /> New Partner
            </button>
            <button className="bg-ui-purple hover:bg-ui-purple-dark text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <Plus className="h-4 w-4 mr-1" /> New Driver
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
                  On-time Delivery
                </h3>
                <p className="text-gray-500 dark:text-dark-text-muted text-xs mt-1">
                  Last updated: Today at 10:45 AM
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-ui-green">97%</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
                  Fleet Utilization
                </h3>
                <p className="text-gray-500 dark:text-dark-text-muted text-xs mt-1">
                  Last updated: Today at 10:45 AM
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-ui-purple">85%</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
                  Fulfillment Rate
                </h3>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-ui-yellow">92%</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm flex items-center justify-center">
            <button className="border border-gray-200 dark:border-dark-background-secondary text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-dark-background-secondary">
              Generate Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
                  Total Loads
                </h3>
                <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
                  7,951
                </p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-ui-green">
                    + 12% from last month
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm border-l-2 border-ui-red">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
                  In-transit Trips
                </h3>
                <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
                  11
                </p>
                <p className="text-gray-500 dark:text-dark-text-muted text-xs mt-1">
                  On schedule
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm border-l-2 border-ui-green">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium">
                  Completed Trips
                </h3>
                <p className="text-gray-900 dark:text-white text-2xl font-bold mt-1">
                  984
                </p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-ui-green">
                    + 8% from last month
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm">
            <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-3">
              Pending KYC Verifications
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 dark:bg-dark-background-tertiary rounded-md p-2 flex flex-col items-center">
                <p className="text-gray-900 dark:text-white text-lg font-bold">
                  159
                </p>
                <p className="text-gray-500 dark:text-dark-text-muted text-xs">
                  Loaders
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-background-tertiary rounded-md p-2 flex flex-col items-center">
                <p className="text-gray-900 dark:text-white text-lg font-bold">
                  140
                </p>
                <p className="text-gray-500 dark:text-dark-text-muted text-xs">
                  Transporters
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-background-tertiary rounded-md p-2 flex flex-col items-center">
                <p className="text-gray-900 dark:text-white text-lg font-bold">
                  7
                </p>
                <p className="text-gray-500 dark:text-dark-text-muted text-xs">
                  Drivers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                Loads
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                47
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                confirmed trips
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                110
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                Verified Loaders
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                1,198
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                Verified partners
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                1,209
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                In-transit Trips
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                47
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                closed trips
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                110
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                Verified Vehicles
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                1,198
              </p>
            </div>
            <div className="bg-white dark:bg-dark-background-primary rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 dark:text-dark-text-muted text-sm font-medium mb-2">
                Verified Drivers
              </h3>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                1,209
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h3 className="text-gray-900 dark:text-white text-sm font-medium">
                Recent Movement
              </h3>
              <p className="text-gray-500 dark:text-dark-text-muted text-xs mt-1 sm:mt-0">
                Showing activity over time (last 30 days)
              </p>
            </div>
            <Chart height={180} />
          </div>

          <div className="bg-white dark:bg-dark-background-primary rounded-lg p-4 shadow-sm">
            <h3 className="text-gray-900 dark:text-white text-sm font-medium mb-3">
              Recent Activity
            </h3>
            <div className="space-y-1">
              <ActivityItem
                type="new"
                title="New driver onboarded - Rahul K."
                time="10 mins ago"
              />
              <ActivityItem
                type="pending"
                title="KYC verification pending for Transporter #T-4578"
                time="30 mins ago"
              />
              <ActivityItem
                type="completed"
                title="Load #L-9354 dispatched from Mumbai to Delhi"
                time="1 hour ago"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
