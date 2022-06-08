import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        textAlign: 'center',
        alignItems: 'center',
        minHeight: '8vh',
        bgcolor: 'primary.500',
        zIndex: 1000,
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
