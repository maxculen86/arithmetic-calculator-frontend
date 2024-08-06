import { useState, useCallback } from 'react';
import { AuthUser } from '@aws-amplify/auth';
import { fetchRecords } from '../api/v1/records';
import { FilterProps, Operation } from '../types/userRecordsTypes';
import { operationTypeMap } from '../constants/operationTypes';

export const useRecordsFetch = (user: AuthUser | undefined) => {
  const [state, setState] = useState({
    operations: [] as Operation[],
    loading: true,
    totalRecords: 0,
    totalPages: 0,
  });

  const fetchOperations = useCallback(async (
    currentPage: number,
    currentRowsPerPage: number,
    currentFilter: FilterProps,
    currentSearchString: string
  ) => {
    if (!user) return;

    console.log('fetchOperations:', currentPage, currentRowsPerPage, currentFilter, currentSearchString);
    try {
      const operationId = currentFilter.operationType
        ? Object.keys(operationTypeMap).find(key => operationTypeMap[key] === currentFilter.operationType)
        : undefined;

      console.log('operationId:', operationId);
      const response = await fetchRecords({
        userId: user.userId,
        operationId: operationId ? operationId : undefined,
        page: currentPage,
        startDate: currentFilter.startDate || undefined,
        endDate: currentFilter.endDate || undefined,
        rowsPerPage: currentRowsPerPage,
        sortBy: currentFilter.sortBy || 'created_at',
        sortOrder: currentFilter.sortOrder || 'desc',
        searchString: currentSearchString || undefined
      });
      console.log('fetchOperations response:', response);
      setState({
        operations: response.items || [],
        loading: false,
        totalRecords: response.totalCount || 0,
        totalPages: response.totalPages || 0,
      });
    } catch (error) {
      console.error('Error fetching operations:', error);
      setState(prevState => ({ ...prevState, operations: [], loading: false }));
    }
  }, [user]);

  return { ...state, fetchOperations };
};
