import {
  Box, Typography, Button, Divider,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';

function Home() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography
        variant="body2"
        color="text.grey.700"
        fontWeight="semiBold"
      >
        Student si?
      </Typography>
      <Button
        variant="primary"
        onClick={() => navigate(ROUTE_PATHS.SEARCHING_FOR_INTERNSHIP)}
      >
        Tražis praksu?
      </Button>
      <Divider sx={{ mx: '15%' }} />
      <Typography
        variant="body2"
        fontWeight="semiBold"
        color="text.grey.700"
      >
        Kompanija ste?
      </Typography>
      <Button
        variant="primary"
        onClick={() => navigate(ROUTE_PATHS.OFFERING_INTERNSHIP)}
        className="kompanije"
      >
        Nudite praksu?
      </Button>
    </Box>
  );
}

export default Home;
