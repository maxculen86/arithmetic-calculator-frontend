import React from 'react';
import { TextField, Button } from '@mui/material';

interface AddBalanceFormProps {
  amount: number | '';
  setAmount: (amount: number | '') => void;
  handleSubmit: (e: React.FormEvent) => void;
}

/**
 * AddBalanceForm component.
 * 
 * @param {number} amount - The amount value.
 * @param {Function} setAmount - The function to set the amount value.
 * @param {Function} handleSubmit - The function to handle form submission.
 * @returns {JSX.Element} The AddBalanceForm component.
 */
const AddBalanceForm: React.FC<AddBalanceFormProps> = ({ amount, setAmount, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <TextField
      fullWidth
      label="Amount"
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
      margin="normal"
      required
    />
    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
      Add Balance
    </Button>
  </form>
);

export default AddBalanceForm;
