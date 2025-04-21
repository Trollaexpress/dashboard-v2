
const stats = [
  { label: 'Total Vehicles', value: 1198 },
  { label: 'Available Vehicles', value: 482 },
  { label: 'Vehicles In Transit', value: 568 },
  { label: 'Need Attention', value: 148 },
];

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-sm text-gray-400">{stat.label}</p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-1">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}