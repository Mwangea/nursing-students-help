import  { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';


import { UnlockedAnswer } from '../../types/answers';
import { formatDate } from '../../utils/date';

interface UnlockedAnswerCardProps {
  answer: UnlockedAnswer;
}

export function UnlockedAnswerCard({ answer }: UnlockedAnswerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
            {answer.subject}
          </span>
          <span className="text-xs text-gray-500">
            Unlocked {formatDate(answer.unlockedAt)}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900">{answer.question}</h3>
        
        <div className={`mt-3 text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {answer.answer}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-1" />
            {answer.readTime} min read
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-yellow-600 hover:text-yellow-700"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="h-4 w-4 ml-1" /></>
            ) : (
              <>Show More <ChevronDown className="h-4 w-4 ml-1" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}