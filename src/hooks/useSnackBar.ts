import { useState, useCallback } from 'react';

interface SnackbarState {
  message: string | null;
  type: 'success' | 'error' | null;
}

/**
 * Custom hook for managing a snackbar state.
 * @returns An object containing the snackbar state and functions to show and hide the snackbar.
 */
export const useSnackbar = () => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({ message: null, type: null });

  const showSnackbar = useCallback((message: string, type: 'success' | 'error') => {
    setSnackbar({ message, type });
  }, []);


  const hideSnackbar = useCallback(() => {
    setSnackbar({ message: null, type: null });
  }, []);

  return {
    snackbar,
    showSnackbar,
    hideSnackbar
  };
};
