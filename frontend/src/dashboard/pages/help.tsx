
import { HelpCircle } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';

export default function HelpPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Help Center</h1>
          <p className="text-gray-500">Find answers to common questions</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">How can we help?</h2>
            <p className="text-gray-500">Browse our help articles or contact support</p>
            <div className="mt-4 space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Browse Articles
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}