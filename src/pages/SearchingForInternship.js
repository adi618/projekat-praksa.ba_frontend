import { Box, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';

function SearchingForInternship() {
  const navigate = useNavigate();
  return (
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
        Student si?
      </Typography>
      <Typography
        variant="body2"
        color="text.lightGrey"
        fontWeight="semiBold"
        my={1}
      >
        U potrazi si za praksom?
      </Typography>
      <Typography
        variant="body2"
        color="text.lightGrey"
        fontWeight="semiBold"
        mb={3}
      >
        Praksa.ba je pravo rješenje.
      </Typography>
      <Button
        variant="primary"
        onClick={() => navigate(ROUTE_PATHS.POST_LIST)}
      >
        Pronađi praksu
      </Button>
    </Box>
  );
}

export default SearchingForInternship;
