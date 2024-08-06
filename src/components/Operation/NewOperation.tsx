import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import InsufficientBalanceModal from '../Modal/InsufficientBalanceModal';
import OperationForm from './OperationForm';
import { useNewOperationForm } from '../../hooks/useNewOperationForm';

/**
 * Represents the NewOperation component.
 * This component is responsible for rendering the form for creating a new operation.
 * It handles user authentication, form submission, and displays the result and error messages.
 */
const NewOperation: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  
  const {
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
  } = useNewOperationForm(user?.userId || '');

  if (!user) {
    return <Typography>User not authenticated</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, mt: '100px', alignItems: 'center' }}>
      <OperationForm
        operationType={operationType}
        params={params}
        handleSubmit={handleSubmit}
        handleOperationTypeChange={handleOperationTypeChange}
        handleParamChange={handleParamChange}
      />
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      {result && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Result: {result}
        </Typography>
      )}
      <InsufficientBalanceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userId={user.userId}
        onAddBalanceSuccess={handleAddBalanceSuccess}
      />
    </Box>
  );
};

export default NewOperation;