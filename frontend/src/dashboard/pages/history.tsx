
import { BookOpen, CreditCard, FileText, MessageSquare } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';
import { ActivityItem } from '../history/ActivityItem';
import { MetaTags } from '../seo/MetaTags';

const activities = [
  {
    id: 1,
    icon: FileText,
    title: 'Assignment Submitted',
    description: 'Medical Ethics Case Study',
    timestamp: '2024-03-15T14:30:00Z',
    status: 'success' as const
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Payment Processed',
    description: '$49.99 for Nursing Research Help',
    timestamp: '2024-03-15T10:15:00Z',
    status: 'success' as const
  },
  {
    id: 3,
    icon: MessageSquare,
    title: 'Support Chat',
    description: 'Discussed assignment requirements',
    timestamp: '2024-03-14T16:45:00Z',
    status: 'success' as const
  },
  {
    id: 4,
    icon: BookOpen,
    title: 'Study Material Downloaded',
    description: 'NCLEX Practice Questions Pack',
    timestamp: '2024-03-14T11:30:00Z',
    status: 'success' as const
  }
];

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <MetaTags
        title="Activity History"
        description="View your recent activity history"
        keywords={['activity', 'history', 'timeline']}
      />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Activity History</h1>
          <p className="text-gray-500">Track your recent activities</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="space-y-6">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}