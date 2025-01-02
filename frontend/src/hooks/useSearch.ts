import { useState, useCallback } from 'react';
import { SearchResult } from '../types/search';
import { mockResults } from '../data/mockSearchData';

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>(mockResults);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchQuestions = useCallback(async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const filtered = mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.snippet.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch {
      setError('Failed to search questions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    results,
    isLoading,
    error,
    searchQuestions
  };
}