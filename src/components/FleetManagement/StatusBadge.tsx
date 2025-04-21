
type Props = {
  status: 'Active' | 'In Transit' | 'Maintenance' | 'Breakdown' | 'Available';
};

const colors: Record<string, string> = {
  Active: 'bg-green-600',
  'In Transit': 'bg-blue-600',
  Maintenance: 'bg-red-600',
  Breakdown: 'bg-yellow-600',
  Available: 'bg-green-500',
};

export function StatusBadge({ status }: Props) {
  return (
    <span className={`text-xs px-3 py-1 rounded-full text-white ${colors[status]}`}>
      {status}
    </span>
  );
}
