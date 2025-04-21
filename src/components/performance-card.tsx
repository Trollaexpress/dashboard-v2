interface PerformanceCardProps {
  title: string;
  value: string;
  color: string;
  lastUpdated?: string;
}

export function PerformanceCard({
  title,
  value,
  color,
  lastUpdated,
}: PerformanceCardProps) {
  return (
    <div className="bg-[#1e2537] rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[#6d7484] text-sm font-medium">{title}</h3>
          {lastUpdated && (
            <p className="text-[#6d7484] text-xs mt-1">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold" style={{color}}>
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
