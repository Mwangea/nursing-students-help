import { useUnlockedAnswers } from "../../hooks/useUnlockedAnswers";
import { UnlockedAnswersList } from "../answers/UnlockedAnswersList";
import { DashboardLayout } from "../layout/DashBoardLayout";
import { MetaTags } from "../seo/MetaTags";


export default function UnlockedAnswersPage() {
  const { answers, isLoading, error } = useUnlockedAnswers();

  return (
    <DashboardLayout>
      <MetaTags 
        title="My Unlocked Answers"
        description="Access your unlocked nursing questions and detailed answers"
        keywords={['nursing answers', 'study materials', 'nursing education']}
      />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Unlocked Answers</h1>
          <p className="text-gray-500">Access your purchased answers and explanations</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}

        <UnlockedAnswersList answers={answers} isLoading={isLoading} />
      </div>
    </DashboardLayout>
  );
}