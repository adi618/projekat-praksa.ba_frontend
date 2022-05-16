import { Box } from '@mui/material';
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

import AuthHeader from '../containers/Auth/AuthHeader';

function RenderCurrentComponent({ currentComponent, setComponent }) {
  switch (currentComponent) {
    case (AUTH_COMPONENTS.STUDENT):
      return <StudentTab />;
    case (AUTH_COMPONENTS.RECRUITER):
      return <RecruiterTab setCurrentComponent={setComponent} />;
    case (AUTH_COMPONENTS.LOGIN):
      return <LoginTab setCurrentComponent={setComponent} />;
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
      <AuthHeader />
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
