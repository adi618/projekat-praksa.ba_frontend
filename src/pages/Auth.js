import {
  Box, Button, CardMedia, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_COMPONENTS } from '../constants';
import FinishedTab from '../containers/Auth/FinishedTab';
import LoginTab from '../containers/Auth/LoginTab';
import RecruiterTab from '../containers/Auth/RecruiterTab';
import RegisterTab from '../containers/Auth/RegisterTab';
import StudentTab from '../containers/Auth/StudentTab';
import Footer from '../containers/Footer';
import { setCurrentComponent } from '../features/authComponent';

import authHeaderImage from '../assets/images/authHeaderImage.jpg';

function RenderCurrentComponent({ currentComponent, setComponent }) {
  switch (currentComponent) {
    case (AUTH_COMPONENTS.STUDENT):
      return <StudentTab />;
    case (AUTH_COMPONENTS.RECRUITER):
      return <RecruiterTab setCurrentComponent={setComponent} />;
    case (AUTH_COMPONENTS.LOGIN):
      return <LoginTab />;
    case (AUTH_COMPONENTS.REGISTER):
      return <RegisterTab setCurrentComponent={setComponent} />;
    case (AUTH_COMPONENTS.FINISHED):
      return <FinishedTab />;
    default:
      return <div>error</div>;
  }
}

function Auth() {
  const dispatch = useDispatch();

  const { currentComponent } = useSelector((state) => state.authComponent);

  const isWiderThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box
      sx={(theme) => ({
        minHeight: '100%',
        bgcolor: 'primary.500',
        borderRadius: { md: '16px 0 0 0' },
        overflow: 'hidden',
        boxShadow: `0 0 0px 10px ${theme.palette.primary.main}`,
        pb: 10,
      })}
    >
      {!isWiderThanMd ? (
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
      )
        : (
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
        )}
      <Box
        sx={{
          minHeight: '100%',
          width: '100%',
          bgcolor: 'primary.500',
          borderRadius: '20px 20px 0 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'space-around', md: 'space-between' },
          alignItems: 'center',
        }}
      >
        <RenderCurrentComponent
          currentComponent={currentComponent}
          setComponent={(component) => dispatch(setCurrentComponent(component))}
        />
      </Box>
      <Footer />
    </Box>
  );
}

export default Auth;
