import React from 'react';
import { TableBody as MuiTableBody, TableRow, TableCell, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Operation } from '../../types/userRecordsTypes';
import { getOperationType } from '../../utils/operationtypes';

interface TableBodyProps {
  operations: Operation[];
  onDelete: (id: string) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ operations, onDelete }) => (
  <MuiTableBody>
    {operations.map((operation) => (
      <TableRow key={operation.id}>
        <TableCell>{getOperationType(operation.operation_id)}</TableCell>
        <TableCell>{operation.operation_response}</TableCell>
        <TableCell>{operation.amount}</TableCell>
        <TableCell>{operation.user_balance}</TableCell>
        <TableCell>{operation.created_at ? new Date(operation.created_at).toLocaleString() : 'N/A'}</TableCell>
        <TableCell>
          <IconButton onClick={() => onDelete(operation.id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ))}
  </MuiTableBody>
);

export default TableBody;