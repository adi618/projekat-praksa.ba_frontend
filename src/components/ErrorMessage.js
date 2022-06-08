import { Box, Typography } from '@mui/material';
import React from 'react';

function ErrorMessage({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 10,
        color: 'error.main',
      }}
    >
      <Typography>{children}</Typography>
    </Box>
  );
}

export default ErrorMessage;
