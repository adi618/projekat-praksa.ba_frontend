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
  width,
  disabled,
}) {
  return (
    <Box sx={{ width, mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel id={name}>{title}</InputLabel>
        <Select
          name={name}
          {...register(name)}
          labelId={name}
          label={title}
          value={selectedOption}
          onChange={handleOptionChange}
          disabled={disabled}
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
