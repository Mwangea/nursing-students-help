
import { BookOpen } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';

export default function MaterialsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Study Materials</h1>
          <p className="text-gray-500">Access your study resources</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No materials yet</h2>
            <p className="text-gray-500">Your study materials will appear here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}