import { useState } from 'react';
import { FilterProps } from '../types/userRecordsTypes';

export const useFilter = (initialFilter: FilterProps) => {
  const [filter, setFilter] = useState<FilterProps>(initialFilter);

  const handleFilterChange = (name: keyof FilterProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

  const updateDateFilter = (startDate: string | null, endDate: string | null) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      startDate,
      endDate,
    }));
  };

  return {
    filter,
    handleFilterChange,
    updateDateFilter,
  };
};  