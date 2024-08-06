import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchBar } from '../../hooks/useSearchBar';

interface SearchBarProps {
  onSearch: (searchString: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { searchTerm, handleSearch, handleKeyDown, handleChange } = useSearchBar(onSearch);

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      fullWidth
      margin='none'
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
