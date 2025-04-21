interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
  borderColor?: string;
  onSchedule?: boolean;
}

export function StatCard({
  title,
  value,
  trend,
  className,
  borderColor,
  onSchedule,
}: StatCardProps) {
  return (
    <div
      className={`bg-[#1e2537] rounded-lg p-4 ${className} ${borderColor ? `border-l-2 border-${borderColor}` : ''}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[#6d7484] text-sm font-medium">{title}</h3>
          <p className="text-white text-2xl font-bold mt-1">{value}</p>
          {trend && (
            <div className="mt-2">
              <span
                className={`text-xs font-medium ${trend.isPositive ? 'text-[#25c06d]' : 'text-[#ff5757]'}`}>
                {trend.isPositive ? '+' : '-'} {trend.value}
              </span>
            </div>
          )}
          {onSchedule && (
            <p className="text-[#6d7484] text-xs mt-1">On schedule</p>
          )}
        </div>
      </div>
    </div>
  );
}
