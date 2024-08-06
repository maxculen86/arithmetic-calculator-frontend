import { useState } from 'react';

/**
 * Custom hook for managing the insufficient balance modal.
 * 
 * @param onAddBalanceSuccess - Callback function to be executed when the balance is successfully added.
 * @param onClose - Callback function to be executed when the modal is closed.
 * @returns An object containing the state and functions related to the insufficient balance modal.
 */
export const useInsufficientBalanceModal = (onAddBalanceSuccess: () => void, onClose: () => void) => {
  const [showAddBalance, setShowAddBalance] = useState(false);

  const handleAddBalanceSuccess = () => {
    onAddBalanceSuccess();
    onClose();
  };

  const handleShowAddBalance = () => setShowAddBalance(true);

  return {
    showAddBalance,
    handleAddBalanceSuccess,
    handleShowAddBalance,
  };
};
