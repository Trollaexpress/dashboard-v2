import React from 'react';
// import colors from '@/styles/colors';

type ActivityItemProps = {
  type: 'new' | 'pending' | 'completed';
  title: string;
  time: string;
};

export const ActivityItem = ({type, title, time}: ActivityItemProps) => {
  const getActivityColor = () => {
    switch (type) {
      case 'new':
        return 'bg-ui-purple';
      case 'pending':
        return 'bg-ui-yellow';
      case 'completed':
        return 'bg-ui-green';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="flex items-start space-x-3 py-2 border-b border-gray-100 dark:border-dark-background-secondary last:border-0">
      <div className={`w-2 h-2 rounded-full mt-2 ${getActivityColor()}`} />
      <div className="flex-1">
        <p className="text-gray-900 dark:text-white text-sm">{title}</p>
        <p className="text-gray-500 dark:text-dark-text-muted text-xs">
          {time}
        </p>
      </div>
    </div>
  );
};
