import {StatusBadge} from './StatusBadge';

type VehicleStatus =
  | 'Active'
  | 'In Transit'
  | 'Maintenance'
  | 'Breakdown'
  | 'Available';

type Vehicle = {
  id: string;
  type: string;
  reg: string;
  driver: string;
  status: VehicleStatus;
  location: string;
};

const vehicles: Vehicle[] = [
  {
    id: 'TRV-9078',
    type: 'LCV (3.5T)',
    reg: 'MH01-AX-8791',
    driver: 'Rahul Singh',
    status: 'Active',
    location: 'Mumbai',
  },
  {
    id: 'TRV-9079',
    type: 'HCV (12T)',
    reg: 'DL01-YT-4326',
    driver: 'Amit Kumar',
    status: 'In Transit',
    location: 'Delhi > Jaipur',
  },
  {
    id: 'TRV-9080',
    type: 'LCV (4T)',
    reg: 'KA01-PQ-1765',
    driver: 'Priya Sharma',
    status: 'Maintenance',
    location: 'Bangalore',
  },
];

export function FleetTable() {
  return (
    <div className="overflow-x-auto rounded-lg bg-gray-800">
      <table className="min-w-full text-sm text-left text-white">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-3">Vehicle ID</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Registration</th>
            <th className="px-4 py-3">Driver</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="px-4 py-3">{v.id}</td>
              <td className="px-4 py-3">{v.type}</td>
              <td className="px-4 py-3">{v.reg}</td>
              <td className="px-4 py-3">{v.driver}</td>
              <td className="px-4 py-3">
                <StatusBadge status={v.status} />
              </td>
              <td className="px-4 py-3">{v.location}</td>
              <td className="px-4 py-3">
                <button className="text-indigo-500 hover:underline text-sm">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
