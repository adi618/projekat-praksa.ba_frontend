import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import RecruiterTab from '../containers/Post/Auth/RecruiterTab';
import StudentTab from '../containers/Post/Auth/StudentTab';

function Auth() {
  const [isRecruiter, setIsRecruiter] = useState(false);
  // false if recruiter, true if student
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
            setIsRecruiter(false);
          }}
          disabled={!isRecruiter}
          sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          Tražiš praksu?
        </Button>
        <Button
          onClick={() => {
            setIsRecruiter(true);
          }}
          disabled={!!isRecruiter}
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
        {!isRecruiter
          ? <StudentTab />
          : <RecruiterTab />}
      </Box>
    </Box>
  );
}

export default Auth;
