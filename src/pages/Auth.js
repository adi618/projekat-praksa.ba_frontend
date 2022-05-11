import { Box, Button } from '@mui/material';
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

  return (
    <>
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
      <Box
        sx={{
          minHeight: '77vh',
          width: '100%',
          bgcolor: 'primary.500',
          borderRadius: '20px 20px 0 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <RenderCurrentComponent
          currentComponent={currentComponent}
          setComponent={(component) => dispatch(setCurrentComponent(component))}
        />
      </Box>
      <Footer bgcolor="primary.500" />
    </>
  );
}

export default Auth;
