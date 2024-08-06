import React from 'react';
import { Box, Button, IconButton, Popover } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import ClearIcon from '@mui/icons-material/Clear';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DateRangeFilterProps {
  startDate: string | null;
  endDate: string | null;
  anchorEl: HTMLElement | null;
  dateRange: any[];
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onChange: (item: any) => void;
  onClear: () => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  startDate,
  endDate,
  anchorEl,
  dateRange,
  onOpen,
  onClose,
  onChange,
  onClear,
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Button onClick={onOpen}>
      {startDate && endDate
        ? `${startDate} to ${endDate}`
        : 'Select Date Range'}
    </Button>
    {startDate && endDate && (
      <IconButton onClick={onClear} size="small">
        <ClearIcon />
      </IconButton>
    )}
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <DateRangePicker
        ranges={dateRange}
        onChange={onChange}
      />
    </Popover>
  </Box>
);

export default DateRangeFilter;
