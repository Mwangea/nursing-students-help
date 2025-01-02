
import {  FileText, MessageSquare, CreditCard } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Assignment Submitted',
    description: 'Medical Ethics Case Study',
    time: '2 hours ago',
    icon: FileText,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    id: 2,
    title: 'Payment Processed',
    description: '$49.99 for Nursing Research Help',
    time: '5 hours ago',
    icon: CreditCard,
    color: 'text-green-600 bg-green-50',
  },
  {
    id: 3,
    title: 'Support Chat',
    description: 'Discussed assignment requirements',
    time: '1 day ago',
    icon: MessageSquare,
    color: 'text-purple-600 bg-purple-50',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Recent Activity</h2>
        <a href="/history" className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
          View All
        </a>
      </div>
      
      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}