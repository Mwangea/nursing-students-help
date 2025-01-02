
import { MessageSquare } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';

export default function SupportPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Support Chat</h1>
          <p className="text-gray-500">Get help from our support team</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Start a conversation</h2>
            <p className="text-gray-500">Our support team is here to help you</p>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
              New Chat
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}