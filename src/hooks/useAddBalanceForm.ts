import { useState } from 'react';
import { addBalance } from '../api/v1/operations';

interface UseAddBalanceFormProps {
  userId: string;
  onSuccess: () => void;
}

/**
 * Custom hook for handling the add balance form.
 *
 * @param {UseAddBalanceFormProps} options - The options for the hook.
 * @param {number} options.userId - The user ID.
 * @param {Function} options.onSuccess - The callback function to be called on success.
 * @returns {Object} - The state and functions for the add balance form.
 */
export const useAddBalanceForm = ({ userId, onSuccess }: UseAddBalanceFormProps) => {
  const [amount, setAmount] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amount === '') {
      setError('Please enter an amount');
      return;
    }

    try {
      await addBalance(userId, amount);
      setError(null);
      setAmount('');
      onSuccess();
    } catch (error) {
      setError('An error occurred while adding balance');
    }
  };

  return {
    amount,
    setAmount,
    error,
    handleSubmit,
  };
};
