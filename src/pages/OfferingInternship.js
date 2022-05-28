import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';

function OfferingInternship() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography
          mb={5}
          variant="h1"
          fontWeight="extraBold"
        >
          praksa.ba
        </Typography>
        <Typography
          variant="body2"
          color="text.lightGrey"
          fontWeight="semiBold"
        >
          Želiš postati dio zajednice praksa.ba kao firma
        </Typography>
        <Typography
          variant="body2"
          color="text.lightGrey"
          fontWeight="semiBold"
          my={1}
        >
          i olakšati mladima usavršavanje vještina?
        </Typography>
        <Typography
          variant="body2"
          color="text.lightGrey"
          fontWeight="semiBold"
          mb={3}
        >
          Za mlade!
        </Typography>
        <Button
          variant="primary"
          onClick={() => navigate(ROUTE_PATHS.REGISTER)}
        >
          Registruj se
        </Button>
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Typography
          variant="body2"
          fontWeight="semiBold"
          color="text.lightGrey"
        >
          Imate račun? Prijavite se.
        </Typography>
        <Button
          variant="primary"
          onClick={() => navigate(ROUTE_PATHS.LOGIN)}
        >
          Prijavite se
        </Button>
      </Box>
    </>
  );
}

export default OfferingInternship;
