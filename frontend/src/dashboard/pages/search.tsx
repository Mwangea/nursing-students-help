import { useSearch } from "../../hooks/useSearch";
import { DashboardLayout } from "../layout/DashBoardLayout";
import { SearchBar } from "../search/SearchBar";
import { SearchResults } from "../search/SearchResults";
import { MetaTags } from "../seo/MetaTags";


export default function SearchPage() {
  const { results, isLoading, error, searchQuestions } = useSearch();

  const handleUnlock = (id: string) => {
    // In a real app, this would open a payment modal or redirect to checkout
    console.log('Unlocking answer:', id);
  };

  return (
    <DashboardLayout>
      <MetaTags 
        title="Search Nursing Questions"
        description="Search our database of expert-answered nursing questions. Get instant access to detailed explanations and study materials."
        keywords={['nursing questions', 'NCLEX prep', 'nursing study materials', 'nursing education']}
      />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Search Questions</h1>
          <p className="text-gray-500">Find expert answers to nursing questions</p>
        </div>

        <SearchBar 
          onSearch={searchQuestions}
          isLoading={isLoading}
        />
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}
        
        <div className="mt-8">
          <SearchResults 
            results={results}
            onUnlock={handleUnlock}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}