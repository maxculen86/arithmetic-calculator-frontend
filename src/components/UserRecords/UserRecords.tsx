import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { deleteRecord } from '../../api/records';
import FilterSection from '../Filter/FilterSection';
import SearchBar from '../SearchBar/SearchBar';
import RecordsTable from '../Table/RecordsTable';
import CustomSnackbar from '../Feedback/CustomSnackBar';
import { useUserRecordsState } from '../../hooks/useUserRecordsState';
import { useRecordsFetch } from '../../hooks/useRecordsFetch';

const UserRecords: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { operations, loading, totalRecords, totalPages, fetchOperations } = useRecordsFetch(user);
  const {
    page,
    rowsPerPage,
    filter,
    searchString,
    message,
    setMessage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleFilterChange,
    handleSort,
    debouncedSearch
  } = useUserRecordsState();

  useEffect(() => {
    if (user) {
      fetchOperations(page, rowsPerPage, filter, searchString);
    }
  }, [user, page, rowsPerPage, filter, searchString, fetchOperations]);

  const handleDelete = async (id: string) => {
    if (!user) return;
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await deleteRecord({ userId: user.userId, recordId: id });
      setMessage({ success: 'Record deleted successfully', error: null });
      fetchOperations(page, rowsPerPage, filter, searchString);
    } catch (error) {
      console.error('Error deleting record:', error);
      setMessage({ success: null, error: 'Failed to delete record. Please try again.' });
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>User Records</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        my: 4,
        maxWidth: 1200,
        width: '100%'
      }}>
        <FilterSection filter={filter} onFilterChange={handleFilterChange} />
        <Box sx={{ width: '30%'}}>
          <SearchBar onSearch={debouncedSearch} />
        </Box>
      </Box>
      <RecordsTable
        operations={operations}
        loading={loading}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRecords={totalRecords}
        totalPages={totalPages}
        onDelete={handleDelete}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        onSort={handleSort}
        sortBy={filter.sortBy}
        sortOrder={filter.sortOrder}
      />
      <CustomSnackbar
        successMessage={message.success}
        errorMessage={message.error}
        onClose={() => setMessage({ success: null, error: null })}
      />
    </Box>
  );
};

export default UserRecords;
