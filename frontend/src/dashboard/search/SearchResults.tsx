
import { QuestionCard } from './QuestionCard';

interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  subject: string;
  price: number;
}

interface SearchResultsProps {
  results: SearchResult[];
  onUnlock: (id: string) => void;
}

export function SearchResults({ results, onUnlock }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No results found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <QuestionCard
          key={result.id}
          title={result.title}
          snippet={result.snippet}
          subject={result.subject}
          price={result.price}
          onUnlock={() => onUnlock(result.id)}
        />
      ))}
    </div>
  );
}