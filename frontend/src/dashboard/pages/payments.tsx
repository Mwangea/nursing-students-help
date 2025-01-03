
import { DashboardLayout } from '../layout/DashBoardLayout';
import { PaymentHistoryItem } from '../payment/PaymentHistoryItem';
import { MetaTags } from '../seo/MetaTags';

const payments = [
  {
    id: 1,
    amount: 49.99,
    description: 'NCLEX Practice Questions Bundle',
    date: '2024-03-15T14:30:00Z',
    status: 'completed' as const,
    cardLast4: '4242'
  },
  {
    id: 2,
    amount: 29.99,
    description: 'Pharmacology Study Guide',
    date: '2024-03-14T10:15:00Z',
    status: 'completed' as const,
    cardLast4: '4242'
  },
  {
    id: 3,
    amount: 19.99,
    description: 'Clinical Skills Assessment',
    date: '2024-03-13T16:45:00Z',
    status: 'completed' as const,
    cardLast4: '4242'
  }
];

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <MetaTags
        title="Payment History"
        description="View your payment history and transactions"
        keywords={['payments', 'transactions', 'billing']}
      />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Payment History</h1>
          <p className="text-gray-500">View your payment transactions</p>
        </div>
        
        <div className="grid gap-4">
          {payments.map((payment) => (
            <PaymentHistoryItem key={payment.id} {...payment} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}