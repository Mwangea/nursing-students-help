
import { CreditCard } from 'lucide-react';
import { formatDate } from '../../utils/date';

interface PaymentHistoryItemProps {
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  cardLast4: string;
}

export function PaymentHistoryItem({ amount, description, date, status, cardLast4 }: PaymentHistoryItemProps) {
  const statusStyles = {
    completed: 'text-green-600 bg-green-50',
    pending: 'text-yellow-600 bg-yellow-50',
    failed: 'text-red-600 bg-red-50'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-lg">
            <CreditCard className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">${amount.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
            {status}
          </span>
          <p className="text-sm text-gray-500 mt-1">Card ending in {cardLast4}</p>
          <p className="text-xs text-gray-400">{formatDate(date)}</p>
        </div>
      </div>
    </div>
  );
}