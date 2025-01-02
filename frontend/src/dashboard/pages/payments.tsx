
import { CreditCard } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Payment History</h1>
          <p className="text-gray-500">View your payment transactions</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-center py-12">
            <CreditCard className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No payments yet</h2>
            <p className="text-gray-500">Your payment history will appear here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}