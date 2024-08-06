import { useState, useCallback } from 'react';

/**
 * Custom hook for a search bar functionality.
 * @param onSearch - Callback function to be called when the search is performed.
 * @returns An object containing the current search term, search handler, keydown handler, and change handler.
 */
export const useSearchBar = (onSearch: (searchString: string) => void) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return {
    searchTerm,
    handleSearch,
    handleKeyDown,
    handleChange
  };
};