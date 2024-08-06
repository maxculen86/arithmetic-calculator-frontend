import { useMemo } from 'react';
import { Operation } from '../types/userRecordsTypes';

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
