import {
  Box, FormControl, InputLabel, MenuItem, Select, Typography,
} from '@mui/material';
import React from 'react';

function BasicSelect({
  title,
  options,
  selectedOption,
  handleOptionChange,
  name,
  register,
  errorMessage,
}) {
  return (
    <Box sx={{ width: { xs: '100%', lg: '60%' }, mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel id={name}>{title}</InputLabel>
        <Select
          {...register(name)}
          labelId={name}
          value={selectedOption}
          label={title}
          onChange={handleOptionChange}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          color: 'error.main',
          textAlign: 'right',
        }}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
}

export default BasicSelect;
