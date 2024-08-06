import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { OperationType, OperationData } from '../types/operationTypes';
import { createOperation } from '../api/operations';

/**
 * Custom hook for managing a new operation form.
 * @param userId - The ID of the user.
 * @returns An object containing the state and functions for the new operation form.
 */
export const useNewOperationForm = (userId: string) => {
  const [operationType, setOperationType] = useState<OperationType>('addition');
  const [params, setParams] = useState<{ num1?: number; num2?: number }>({});
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (operationType === 'division' && params.num2 === 0) {
      setError('Cannot divide by zero');
      return;
    }

    setError(null);

    try {
      const operationData: OperationData = {
        userId,
        operationType: operationType,
        operationParams: { ...params }
      };
      const response = await createOperation(operationData);
      setResult(response.result);
    } catch (error) {
      console.error(error);
      if (error && typeof error === 'object' && 'isAxiosError' in error) {
        const axiosError = error as { response?: { status: number } };
        if (axiosError.response && axiosError.response.status === 403) {
          setIsModalOpen(true);
        } else {
          setError('An error occurred while processing the operation');
        }
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleOperationTypeChange = (event: SelectChangeEvent<OperationType>) => {
    setOperationType(event.target.value as OperationType);
    setParams({});
    setResult(null);
    setError(null);
  };

  const handleParamChange = (param: 'num1' | 'num2') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? undefined : parseFloat(e.target.value);
    setParams({ ...params, [param]: value });
    setError(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBalanceSuccess = () => {
    /* TODO: Implement the logic to add balance */
  };

  return {
    operationType,
    params,
    result,
    error,
    isModalOpen,
    handleSubmit,
    handleOperationTypeChange,
    handleParamChange,
    handleCloseModal,
    handleAddBalanceSuccess,
  };
};