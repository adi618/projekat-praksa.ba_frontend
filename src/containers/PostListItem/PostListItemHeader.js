import { Box, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS, BACKEND_HOST } from '../../constants';

function PostListItemHeader({
  companyId,
  companyProfilePhoto,
  companyName,
  companyIndustry,
  companyAddress,
  companyCity,
}) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        display: 'flex',
        p: 2,
        color: 'white',
      }}
    >
      <Link to={`${ROUTE_PATHS.COMPANY}/${companyId}`}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component="img"
            src={`${BACKEND_HOST}/${companyProfilePhoto}`}
            alt="logo"
            height={50}
          />
        </Box>
      </Link>
      <Box pl={2}>
        <Link to={`${ROUTE_PATHS.COMPANY}/${companyId}`} style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant="h6" fontWeight="semiBold">
            {companyName}
          </Typography>
        </Link>
        <Typography variant="body1" fontWeight="semiBold">
          {companyIndustry}
        </Typography>
        <Typography variant="body2" fontWeight="light">
          {`${companyAddress}, ${companyCity}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default PostListItemHeader;
