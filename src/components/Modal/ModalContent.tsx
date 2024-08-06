import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import AddBalance from '../Balance/AddBalance';

interface ModalContentProps {
  showAddBalance: boolean;
  userId: string;
  onAddBalanceSuccess: () => void;
  onShowAddBalance: () => void;
  onClose: () => void;
}

/**
 * ModalContent component displays the content of a modal dialog.
 *
 * @component
 * @param {object} props - The component props.
 * @param {boolean} props.showAddBalance - Indicates whether to show the add balance option.
 * @param {string} props.userId - The user ID.
 * @param {Function} props.onAddBalanceSuccess - The callback function to be called when adding balance is successful.
 * @param {Function} props.onShowAddBalance - The callback function to be called when the add balance option is shown.
 * @param {Function} props.onClose - The callback function to be called when the modal is closed.
 * @returns {JSX.Element} The JSX element representing the modal content.
 */
const ModalContent: React.FC<ModalContentProps> = ({
  showAddBalance,
  userId,
  onAddBalanceSuccess,
  onShowAddBalance,
  onClose,
}) => (
  <>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Insufficient Balance
    </Typography>
    {!showAddBalance ? (
      <>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Your balance is insufficient for this operation. Would you like to add balance?
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button onClick={onShowAddBalance} variant="contained" color="primary" sx={{ mr: 1 }}>
            Yes
          </Button>
          <Button onClick={onClose} variant="contained" color="secondary">
            No
          </Button>
        </Box>
      </>
    ) : (
      <Box sx={{ mt: 2 }}>
        <AddBalance userId={userId} onSuccess={onAddBalanceSuccess} />
      </Box>
    )}
  </>
);

export default ModalContent;
