
import { Clock } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">History</h1>
          <p className="text-gray-500">View your activity history</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-center py-12">
            <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No activity yet</h2>
            <p className="text-gray-500">Your activity history will appear here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}