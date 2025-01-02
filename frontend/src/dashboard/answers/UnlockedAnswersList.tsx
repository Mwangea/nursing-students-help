
import { UnlockedAnswerCard } from './UnlockedAnswerCard';
import { AnswersSkeleton } from './AnswersSkeleton';
import { FileText } from 'lucide-react';
import { UnlockedAnswer } from '../../types/answers';

interface UnlockedAnswersListProps {
  answers: UnlockedAnswer[];
  isLoading: boolean;
}

export function UnlockedAnswersList({ answers, isLoading }: UnlockedAnswersListProps) {
  if (isLoading) {
    return <AnswersSkeleton />;
  }

  if (answers.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm">
        <FileText className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">No unlocked answers yet</h2>
        <p className="text-gray-500 mb-4">Start unlocking answers to build your study materials</p>
        <a 
          href="/search" 
          className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Search Questions
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {answers.map((answer) => (
        <UnlockedAnswerCard key={answer.id} answer={answer} />
      ))}
    </div>
  );
}