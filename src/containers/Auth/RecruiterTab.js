import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AUTH_COMPONENTS } from '../../constants';

function RecruiterTab({ setCurrentComponent }) {
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
        <Box sx={{ opacity: '50%' }}>
          <Typography
            variant="body2"
            fontWeight="semiBold"
          >
            Želiš postati dio zajednice praksa.ba kao firma
          </Typography>
          <Typography
            my={1}
            variant="body2"
            fontWeight="semiBold"
          >
            i olakšati mladima usavršavanje vještina?
          </Typography>
          <Typography
            variant="body2"
            fontWeight="semiBold"
            mb={3}
          >
            Za mlade!
          </Typography>
        </Box>
        <Button
          variant="primary"
          onClick={() => setCurrentComponent(AUTH_COMPONENTS.REGISTER)}
        >
          Registruj se kao firma
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
          sx={{ opacity: '50%' }}
        >
          Imate račun? Prijavite se.
        </Typography>
        <Button
          variant="primary"
          onClick={() => setCurrentComponent(AUTH_COMPONENTS.LOGIN)}
        >
          Prijavite se
        </Button>
      </Box>
    </>
  );
}

export default RecruiterTab;
