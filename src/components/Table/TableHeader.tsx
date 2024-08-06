import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel, Typography } from '@mui/material';

interface Column {
  id: string;
  label: string;
}

interface TableHeaderProps {
  columns: Column[];
  renderSortLabel: (column: string, label: string) => {
    active: boolean;
    direction: 'asc' | 'desc';
    onClick: () => void;
    label: string;
  };
}

/**
 * Renders the header of a table.
 *
 * @component
 * @param {TableHeaderProps} props - The component props.
 * @param {Array<Column>} props.columns - The columns to be displayed in the table header.
 * @param {Function} props.renderSortLabel - The function to render the sort label for each column.
 * @returns {JSX.Element} The rendered table header.
 */
const TableHeader: React.FC<TableHeaderProps> = ({ columns, renderSortLabel }) => (
  <TableHead>
    <TableRow sx={{ backgroundColor: 'grey.100' }}>
      {columns.map((column) => (
        <TableCell key={column.id}>
          <TableSortLabel {...renderSortLabel(column.id, column.label)}>
            <Typography color="inherit">{column.label}</Typography>
          </TableSortLabel>
        </TableCell>
      ))}
      <TableCell>
        <Typography color="inherit">Actions</Typography>
      </TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;
