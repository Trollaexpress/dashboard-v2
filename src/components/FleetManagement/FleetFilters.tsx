const tabs = [
  'All Vehicles',
  'Available',
  'In Transit',
  'Maintenance',
  'Breakdown',
];

export function FleetFilters() {
  return (
    <div className="flex gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap pb-2">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm">
          {tab}
        </button>
      ))}
    </div>
  );
}
