import { useState, useMemo } from 'react';
import { debounce } from 'lodash';
import { FilterProps } from '../types/userRecordsTypes';

/**
 * Custom hook for managing user records state.
 * @returns An object containing the state variables and functions for managing user records.
 */
export const useUserRecordsState = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState<FilterProps>({
    operationType: null,
    startDate: null,
    endDate: null,
    sortBy: 'created_at',
    sortOrder: 'desc'
  });
  const [searchString, setSearchString] = useState('');
  const [message, setMessage] = useState<{ success: string | null, error: string | null }>({ success: null, error: null });

  const handleChangePage = (newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(1);
  };

  const handleFilterChange = (newFilter: FilterProps) => {
    setFilter(newFilter);
    setPage(1);
  };

  const handleSort = (column: string) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      sortBy: column,
      sortOrder: prevFilter.sortBy === column && prevFilter.sortOrder === 'asc' ? 'desc' : 'asc'
    }));
    setPage(1);
  };

  const debouncedSearch = useMemo(
    () => debounce((newSearchString: string) => {
      setSearchString(newSearchString);
      setPage(1);
    }, 300),
    []
  );

  return {
    page,
    rowsPerPage,
    filter,
    searchString,
    message,
    setMessage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleFilterChange,
    handleSort,
    debouncedSearch
  };
};
