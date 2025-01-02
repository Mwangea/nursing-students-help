import  { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, Loader } from 'lucide-react';
import { useSuggestions } from '../../hooks/useSuggestions';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { suggestions, isLoading: loadingSuggestions } = useSuggestions(query);
  const isMobile = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={searchRef} className="relative max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder={isMobile ? "Search..." : "Search nursing questions..."}
          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <div className="absolute left-4 top-3.5">
          {isLoading ? (
            <Loader className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <SearchIcon className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="absolute right-2 top-2 bg-yellow-400 text-black px-4 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          {loadingSuggestions ? (
            <div className="px-4 py-3 text-gray-500">Loading suggestions...</div>
          ) : (
            suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setQuery(suggestion.title);
                  setShowSuggestions(false);
                  onSearch(suggestion.title);
                }}
              >
                {suggestion.title}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}