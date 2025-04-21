import {FleetTable} from '../../../components/FleetManagement/FleetTable';
import {FleetFilters} from '../../../components/FleetManagement/FleetFilters';
import {SummaryCards} from '../../../components/FleetManagement/SummaryCards';
import {Button} from '../../../components/ui/button';
import {Input} from '../../../components/ui/input';
import {Search, Filter, SortDesc} from 'lucide-react';

export default function FleetPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-900">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Fleet Management
          </h1>
          <p className="text-sm text-gray-400">
            Manage your fleet of vehicles and drivers
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <Input
              type="text"
              placeholder="Search fleet, vehicles, drivers..."
              className="pl-10 pr-4 py-2 w-full bg-gray-800 text-white border-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm w-full sm:w-auto">
            + Add Vehicle
          </Button>
        </div>
      </div>

      <FleetFilters />

      <div className="flex flex-wrap justify-end gap-2">
        <Button
          variant="outline"
          className="bg-gray-700 hover:bg-gray-600 text-white text-sm">
          <Filter size={16} className="mr-2" /> Filter
        </Button>
        <Button
          variant="outline"
          className="bg-gray-700 hover:bg-gray-600 text-white text-sm">
          <SortDesc size={16} className="mr-2" /> Sort
        </Button>
      </div>

      <FleetTable />

      <div className="mt-6">
        <SummaryCards />
      </div>
    </div>
  );
}
