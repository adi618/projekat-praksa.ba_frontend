import { Box, Typography } from '@mui/material';

function TextWithRedAsterisk({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography>{children}</Typography>
      <Typography color="error.main" pl="2px">*</Typography>
    </Box>
  );
}

export default TextWithRedAsterisk;
