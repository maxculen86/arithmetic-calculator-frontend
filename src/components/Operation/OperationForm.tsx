import React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, SelectChangeEvent } from '@mui/material';
import { OperationType } from '../../types/operationTypes';
import { operationTypes } from '../../constants/operationTypes';

interface OperationFormProps {
  operationType: OperationType;
  params: { num1?: number; num2?: number };
  handleSubmit: (e: React.FormEvent) => void;
  handleOperationTypeChange: (event: SelectChangeEvent<OperationType>) => void;
  handleParamChange: (param: 'num1' | 'num2') => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Represents a form for performing arithmetic operations.
 * @param operationType - The type of operation to perform.
 * @param params - The parameters for the operation.
 * @param handleSubmit - The function to handle form submission.
 * @param handleOperationTypeChange - The function to handle operation type change.
 * @param handleParamChange - The function to handle parameter change.
 */
const OperationForm: React.FC<OperationFormProps> = ({
  operationType,
  params,
  handleSubmit,
  handleOperationTypeChange,
  handleParamChange,
}) => (
  <form onSubmit={handleSubmit}>
    <Typography 
      variant="h4"
      component="h1"
      color="primary"
      textAlign="center"
      sx={{ maxWidth: '100%' }}
      marginBottom={'50px'}>
        New Operation
    </Typography>
    <FormControl fullWidth margin="normal">
      <InputLabel>Operation Type</InputLabel>
      <Select
        value={operationType}
        onChange={handleOperationTypeChange}
        label="Operation Type"
        required
      >
        {operationTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type.replace('_', ' ')}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    {operationType && operationType !== 'random_string' && (
      <>
        <TextField
          fullWidth
          label="Number 1"
          type="number"
          value={params.num1 ?? ''}
          onChange={handleParamChange('num1')}
          margin="normal"
          required
        />
        {operationType !== 'square_root' && (
          <TextField
            fullWidth
            label="Number 2"
            type="number"
            value={params.num2 ?? ''}
            onChange={handleParamChange('num2')}
            margin="normal"
            required
          />
        )}
      </>
    )}
    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
      Calculate
    </Button>
  </form>
);

export default OperationForm;
