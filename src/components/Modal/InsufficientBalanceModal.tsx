import React from 'react';
import { Modal, Box } from '@mui/material';
import { useInsufficientBalanceModal } from '../../hooks/useInsufficientBalanceModal';
import ModalContent from './ModalContent';

interface InsufficientBalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onAddBalanceSuccess: () => void;
}

/**
 * Represents a modal component that displays an insufficient balance message.
 * @param isOpen - Indicates whether the modal is open or not.
 * @param onClose - Callback function to close the modal.
 * @param userId - The ID of the user.
 * @param onAddBalanceSuccess - Callback function triggered when the balance is successfully added.
 */
const InsufficientBalanceModal: React.FC<InsufficientBalanceModalProps> = ({
  isOpen,
  onClose,
  userId,
  onAddBalanceSuccess
}) => {
  const { showAddBalance, handleAddBalanceSuccess, handleShowAddBalance } = useInsufficientBalanceModal(onAddBalanceSuccess, onClose);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="insufficient-balance-modal"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <ModalContent
          showAddBalance={showAddBalance}
          userId={userId}
          onAddBalanceSuccess={handleAddBalanceSuccess}
          onShowAddBalance={handleShowAddBalance}
          onClose={onClose}
        />
      </Box>
    </Modal>
  );
};

export default InsufficientBalanceModal;
