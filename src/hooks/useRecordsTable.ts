import { useMemo } from 'react';
import { Operation } from '../types/userRecordsTypes';

/**
 * Custom hook for managing the records table.
 *
 * @param operations - The list of operations to display in the table.
 * @param loading - A boolean indicating whether the table is currently loading.
 * @param sortBy - The column ID to sort the table by.
 * @param sortOrder - The sort order ('asc' or 'desc') for the table.
 * @param onSort - A callback function to handle sorting the table.
 * @returns An object containing the columns configuration, a renderSortLabel function, and a flag indicating whether to show the table.
 */
export const useRecordsTable = (
  operations: Operation[],
  loading: boolean,
  sortBy: string | null,
  sortOrder: 'asc' | 'desc' | null,
  onSort: (column: string) => void
) => {
  const columns = useMemo(() => [
    { id: 'operation_id', label: 'Operation' },
    { id: 'operation_response', label: 'Result' },
    { id: 'amount', label: 'Amount' },
    { id: 'user_balance', label: 'User Balance' },
    { id: 'created_at', label: 'Date' },
  ], []);

  const renderSortLabel = (column: string, label: string) => ({
    active: sortBy === column,
    direction: sortBy === column ? (sortOrder || 'asc') : 'asc',
    onClick: () => onSort(column),
    label,
  });

  return {
    columns,
    renderSortLabel,
    showTable: !loading && operations.length > 0,
  };
};
