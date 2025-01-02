

import {  Clock, AlertCircle } from 'lucide-react';
import { DashboardLayout } from '../layout/DashBoardLayout';

const assignments = [
  {
    id: 1,
    title: 'Medical Ethics Case Study',
    subject: 'Nursing Ethics',
    dueDate: '2024-03-20',
    status: 'in-progress',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Patient Care Analysis',
    subject: 'Clinical Practice',
    dueDate: '2024-03-25',
    status: 'pending',
    priority: 'medium',
  },
  // Add more assignments as needed
];

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">My Assignments</h1>
            <p className="text-gray-500">Manage your ongoing and upcoming assignments</p>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
            New Assignment
          </button>
        </div>

        <div className="grid gap-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{assignment.title}</h3>
                  <p className="text-gray-500">{assignment.subject}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === 'in-progress' 
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {assignment.status}
                </span>
              </div>
              
              <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Due: {assignment.dueDate}
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Priority: {assignment.priority}
                </div>
              </div>
              
              <div className="mt-4 flex space-x-3">
                <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                  View Details
                </button>
                <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}