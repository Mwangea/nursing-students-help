import { Lock } from 'lucide-react';

interface QuestionCardProps {
  title: string;
  snippet: string;
  subject: string;
  price: number;
  onUnlock: () => void;
}

export function QuestionCard({ title, snippet, subject, price, onUnlock }: QuestionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
            {subject}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      
      <p className="mt-2 text-gray-600 line-clamp-3">{snippet}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Full answer available
        </span>
        <button
          onClick={onUnlock}
          className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Lock className="h-4 w-4" />
          <span>Unlock for ${price}</span>
        </button>
      </div>
    </div>
  );
}