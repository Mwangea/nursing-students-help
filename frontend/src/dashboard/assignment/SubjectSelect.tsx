
import { ChevronDown } from 'lucide-react';

interface SubjectSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const subjects = [
  'Medical-Surgical Nursing',
  'Pediatric Nursing',
  'Psychiatric Nursing',
  'Maternal-Child Nursing',
  'Community Health Nursing',
  'Nursing Ethics',
  'Pharmacology',
  'Pathophysiology',
  'Health Assessment',
  'Nursing Research'
];

export function SubjectSelect({ value, onChange }: SubjectSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Subject
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          aria-label="Select a subject"
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}