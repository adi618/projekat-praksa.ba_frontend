import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        textAlign: 'center',
        alignItems: 'center',
        minHeight: '8%',
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 'black' }}
      >
        praksa.ba
      </Typography>
      <Typography
        variant="caption"
        sx={{
          alignSelf: 'center',
          pl: 1,
          pr: 2,
          fontWeight: 'light',
        }}
      >
        Copyright &copy; 2022. Sva prava zadržana.
      </Typography>
    </Box>
  );
}

export default Footer;
