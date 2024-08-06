import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { operationTypeMap } from '../../constants/operationTypes';

interface OperationTypeFilterProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A filter component for selecting operation types.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.value - The currently selected operation type.
 * @param {Function} props.onChange - The function to be called when the operation type is changed.
 * @returns {JSX.Element} The operation type filter component.
 */
const OperationTypeFilter: React.FC<OperationTypeFilterProps> = ({ value, onChange }) => (
  <TextField
    label="Operation Type"
    value={value}
    onChange={onChange}
    select
    sx={{ minWidth: 200 }}
  >
    <MenuItem value="">All</MenuItem>
    {Object.values(operationTypeMap).map((type) => (
      <MenuItem key={type} value={type}>{type}</MenuItem>
    ))}
  </TextField>
);

export default OperationTypeFilter;
