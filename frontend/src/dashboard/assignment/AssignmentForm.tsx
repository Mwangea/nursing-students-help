import React, { useState } from 'react';


import { Calendar } from 'lucide-react';
import { FileUpload } from './FileUpload';
import { SubjectSelect } from './SubjectSelect';

export function AssignmentForm() {
  const [formData, setFormData] = useState({
    subject: '',
    dueDate: '',
    instructions: '',
    files: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Submit Your Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <SubjectSelect
          value={formData.subject}
          onChange={(value) => setFormData({ ...formData, subject: value })}
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Due Date
          </label>
          <div className="relative">
            <input
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              title="Due Date"
              placeholder="Select the due date and time"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instructions
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            rows={4}
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            placeholder="Provide detailed instructions for your assignment..."
          />
        </div>

        <FileUpload
          files={formData.files}
          onChange={(files) => setFormData({ ...formData, files })}
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Submit Assignment
        </button>
      </form>
    </div>
  );
}