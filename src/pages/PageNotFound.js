import { Box, CardMedia, useMediaQuery } from '@mui/material';
import pageNotFoundDesktop from '../assets/images/pageNotFoundDesktop.svg';
import pageNotFoundMobile from '../assets/images/pageNotFoundMobile.svg';

function PageNotFound() {
  const isWiderThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  let image = pageNotFoundDesktop;

  if (!isWiderThanMd) {
    image = pageNotFoundMobile;
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{ p: { xs: 4, sm: 15 }, maxWidth: 1000 }}
        alt="header"
      />
    </Box>
  );
}

export default PageNotFound;
