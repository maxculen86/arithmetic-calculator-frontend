import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import { useAddBalanceForm } from '../../hooks/useAddBalanceForm';
import AddBalanceForm from './AddBalanceForm';

interface AddBalanceProps {
  userId: string;
  onSuccess: () => void;
}

/**
 * Renders a component for adding balance.
 * @param {AddBalanceProps} props - The component props.
 * @param {string} props.userId - The user ID.
 * @param {Function} props.onSuccess - The success callback function.
 * @returns {React.ReactElement} The rendered component.
 */
const AddBalance: React.FC<AddBalanceProps> = ({ userId, onSuccess }) => {
  const { amount, setAmount, error, handleSubmit } = useAddBalanceForm({ userId, onSuccess });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Add Balance</Typography>
      <AddBalanceForm
        amount={amount}
        setAmount={setAmount}
        handleSubmit={handleSubmit}
      />
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default AddBalance;