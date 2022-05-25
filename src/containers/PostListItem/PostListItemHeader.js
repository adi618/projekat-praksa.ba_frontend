import { Box, Typography, CardMedia } from '@mui/material';
import { BACKEND_HOST } from '../../constants';

function PostListItemHeader({
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          src={`${BACKEND_HOST}/${companyProfilePhoto}`}
          alt="logo"
          height={50}
        />
      </Box>
      <Box pl={2}>
        <Typography variant="h6" fontWeight="semiBold">
          {companyName}
        </Typography>
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
