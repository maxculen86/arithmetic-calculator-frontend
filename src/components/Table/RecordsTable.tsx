import React from 'react';
import {
  Table, TableContainer, Paper, TablePagination, Typography, CircularProgress, Box
} from '@mui/material';
import { Operation } from '../../types/userRecordsTypes';
import { useRecordsTable } from '../../hooks/useRecordsTable';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface RecordsTableProps {
  operations: Operation[];
  loading: boolean;
  page: number;
  rowsPerPage: number;
  totalRecords: number;
  totalPages: number;
  onDelete: (id: string) => void;
  onChangePage: (newPage: number) => void;
  onChangeRowsPerPage: (newRowsPerPage: number) => void;
  onSort: (column: string) => void;
  sortBy: string | null;
  sortOrder: 'asc' | 'desc' | null;
}

const RecordsTable: React.FC<RecordsTableProps> = ({
  operations,
  loading,
  page,
  rowsPerPage,
  totalRecords,
  onDelete,
  onChangePage,
  onChangeRowsPerPage,
  onSort,
  sortBy,
  sortOrder
}) => {
  const { columns, renderSortLabel, showTable } = useRecordsTable(operations, loading, sortBy, sortOrder, onSort);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!showTable) {
    return <Typography>No records found.</Typography>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHeader columns={columns} renderSortLabel={renderSortLabel} />
          <TableBody operations={operations} onDelete={onDelete} />
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalRecords}
        page={page - 1}
        onPageChange={(_, newPage) => onChangePage(newPage + 1)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => onChangeRowsPerPage(parseInt(event.target.value, 10))}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </>
  );
};

export default RecordsTable;