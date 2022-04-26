import { Box, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

function StudentTab() {
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
            Student si?
          </Typography>
          <Typography
            my={1}
            variant="body2"
            fontWeight="semiBold"
          >
            U potrazi si za praksom?
          </Typography>
          <Typography
            variant="body2"
            fontWeight="semiBold"
            mb={3}
          >
            Praksa.ba je pravo rješenje.
          </Typography>
        </Box>
        <Button
          variant="primary"
          onClick={() => navigate('/')}
        >
          Pronađi praksu
        </Button>
      </Box>
      <Box height={56} />
    </>
  );
}

export default StudentTab;
