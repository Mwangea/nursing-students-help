import { useState, useEffect } from 'react';
import { Suggestion } from '../types/search';

const mockSuggestions: Suggestion[] = [
  { id: '1', title: 'What are the stages of wound healing?' },
  { id: '2', title: 'How to perform a head-to-toe assessment?' },
  { id: '3', title: 'What are the signs and symptoms of diabetes?' },
  { id: '4', title: 'How to calculate drug dosage?' },
  { id: '5', title: 'NCLEX preparation tips' },
  { id: '6', title: 'Common nursing interventions for hypertension' },
];

export function useSuggestions(query: string) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = mockSuggestions.filter(s => 
          s.title.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
        setIsLoading(false);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return { suggestions, isLoading };
}