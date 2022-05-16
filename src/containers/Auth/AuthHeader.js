import {
  Box, Button, CardMedia, Typography, useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import authHeaderImage from '../../assets/images/authHeaderImage.jpg';
import { AUTH_COMPONENTS } from '../../constants';
import { setCurrentComponent } from '../../features/authComponent';

function AuthHeader() {
  const dispatch = useDispatch();
  const { currentComponent } = useSelector((state) => state.authComponent);

  const isWiderThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return isWiderThanMd ? (
    <Box
      sx={{
        bgcolor: 'primary.main',
        maxHeight: '200px',
        overflow: 'hidden',
        display: 'flex',
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        image={authHeaderImage}
        sx={{ filter: 'brightness(70%)', opacity: '35%' }}
        alt="header"
      />
      <Box sx={{
        position: 'absolute',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        pl: 8,
      }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'semiBold', pb: 2 }}
        >
          Prijavite se
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 'normal' }}
        >
          Hvala Vam što ste dio zajednice koja pruža priliku mladima.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 'normal' }}
        >
          Za mlade!
        </Typography>
      </Box>
    </Box>
  )
    : (
      <Box
        sx={(theme) => ({
          height: '15vh',
          width: '100%',
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: `0px 30px ${theme.palette.primary.main}`,
        })}
      >
        <Button
          onClick={() => {
            dispatch(setCurrentComponent(AUTH_COMPONENTS.STUDENT));
          }}
          disabled={currentComponent === AUTH_COMPONENTS.STUDENT}
          sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          Tražiš praksu?
        </Button>
        <Button
          onClick={() => {
            dispatch(setCurrentComponent(AUTH_COMPONENTS.RECRUITER));
          }}
          disabled={currentComponent !== AUTH_COMPONENTS.STUDENT}
          sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          Nudiš praksu?
        </Button>
      </Box>
    );
}

export default AuthHeader;
