import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface CustomSnackbarProps {
  successMessage: string | null;
  errorMessage: string | null;
  onClose: () => void;
}

/**
 * CustomSnackbar component displays a snackbar with a success or error message.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.successMessage - The success message to be displayed.
 * @param {string} props.errorMessage - The error message to be displayed.
 * @param {Function} props.onClose - The callback function to be called when the snackbar is closed.
 * @returns {JSX.Element} The JSX element representing the CustomSnackbar component.
 */
const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ successMessage, errorMessage, onClose }) => {
  const isOpen = Boolean(successMessage || errorMessage);
  const message = successMessage || errorMessage;
  const severity = successMessage ? 'success' : 'error';

  return (
    <Snackbar 
      open={isOpen} 
      autoHideDuration={6000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
