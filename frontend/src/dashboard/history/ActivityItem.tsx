
import { LucideIcon } from 'lucide-react';
import { formatDate } from '../../utils/date';

interface ActivityItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  timestamp: string;
  status?: 'success' | 'pending' | 'error';
}

export function ActivityItem({ icon: Icon, title, description, timestamp, status = 'success' }: ActivityItemProps) {
  const statusColors = {
    success: 'text-green-600 bg-green-50',
    pending: 'text-yellow-600 bg-yellow-50',
    error: 'text-red-600 bg-red-50'
  };

  return (
    <div className="flex items-start space-x-4">
      <div className={`p-2 rounded-lg ${statusColors[status]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{formatDate(timestamp)}</p>
      </div>
    </div>
  );
}