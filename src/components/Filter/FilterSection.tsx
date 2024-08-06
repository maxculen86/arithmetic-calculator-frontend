import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Popover, IconButton } from '@mui/material';
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import { addDays } from 'date-fns';
import ClearIcon from '@mui/icons-material/Clear';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FilterProps } from '../../types/userRecordsTypes';
import { operationTypeMap } from '../../constants/operationTypes';

interface FilterSectionProps {
  filter: FilterProps;
  onFilterChange: (newFilter: FilterProps) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filter, onFilterChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: filter.startDate ? new Date(filter.startDate) : new Date(),
      endDate: filter.endDate ? new Date(filter.endDate) : addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const handleFilterChange = (name: keyof FilterProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, [name]: event.target.value });
  };

  const handleDateRangeChange = (item: RangeKeyDict) => {
    setDateRange([item.selection]);
  };

  const handleDatePickerOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDatePickerClose = () => {
    setAnchorEl(null);
    onFilterChange({
      ...filter,
      startDate: dateRange[0].startDate?.toISOString().split('T')[0] || null,
      endDate: dateRange[0].endDate?.toISOString().split('T')[0] || null,
    });
  };

  const handleClearDateFilter = () => {
    setDateRange([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);
    onFilterChange({
      ...filter,
      startDate: null,
      endDate: null,
    });
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex', gap: 2}}>
      <TextField
        label="Operation Type"
        value={filter.operationType || ''}
        onChange={handleFilterChange('operationType')}
        select
        sx={{ minWidth: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        {Object.values(operationTypeMap).map((type) => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </TextField>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={handleDatePickerOpen}>
          {filter.startDate && filter.endDate
            ? `${filter.startDate} to ${filter.endDate}`
            : 'Select Date Range'}
        </Button>
        {filter.startDate && filter.endDate && (
          <IconButton onClick={handleClearDateFilter} size="small">
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleDatePickerClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DateRangePicker
          ranges={dateRange}
          onChange={handleDateRangeChange}
        />
      </Popover>
    </Box>
  );
};

export default FilterSection;
