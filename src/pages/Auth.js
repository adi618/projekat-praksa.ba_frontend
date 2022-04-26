import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { AUTH_COMPONENTS } from '../constants';
import LoginTab from '../containers/Auth/LoginTab';
import RecruiterTab from '../containers/Auth/RecruiterTab';
import RegisterTab from '../containers/Auth/RegisterTab';
import StudentTab from '../containers/Auth/StudentTab';

function RenderCurrentComponent({ currentComponent, setCurrentComponent }) {
  switch (currentComponent) {
    case (AUTH_COMPONENTS.STUDENT):
      return <StudentTab />;
    case (AUTH_COMPONENTS.RECRUITER):
      return <RecruiterTab setCurrentComponent={setCurrentComponent} />;
    case (AUTH_COMPONENTS.LOGIN):
      return <LoginTab />;
    case (AUTH_COMPONENTS.REGISTER):
      return <RegisterTab />;
    default:
      return <div>error</div>;
  }
}

function Auth() {
  const [currentComponent, setCurrentComponent] = useState(AUTH_COMPONENTS.STUDENT);

  return (
    <Box sx={{ height: '100%' }}>
      <Box
        sx={(theme) => ({
          height: '15%',
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
            setCurrentComponent(AUTH_COMPONENTS.STUDENT);
          }}
          disabled={currentComponent === AUTH_COMPONENTS.STUDENT}
          sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          Tražiš praksu?
        </Button>
        <Button
          onClick={() => {
            setCurrentComponent(AUTH_COMPONENTS.RECRUITER);
          }}
          disabled={currentComponent !== AUTH_COMPONENTS.STUDENT}
          sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          Nudiš praksu?
        </Button>
      </Box>
      <Box
        sx={{
          height: '93%',
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
          setCurrentComponent={setCurrentComponent}
        />
      </Box>
    </Box>
  );
}

export default Auth;
