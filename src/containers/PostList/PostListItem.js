import { Box, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { BACKEND_HOST } from '../../constants';

function PostListItem({
  companyProfilePhoto,
  companyName,
  companyIndustry,
  companyAddress,
  companyCity,
  postTitle,
  postDescription,
  postId,
}) {
  return (
    <Box sx={{ borderRadius: 4, overflow: 'hidden', mt: 2 }}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          display: 'flex',
          p: 1.5,
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
        <Box pl={1.5}>
          <Typography
            variant="h6"
            fontWeight="semiBold"
          >
            {companyName}
          </Typography>
          <Typography
            variant="body1"
            fontWeight="semiBold"
          >
            {companyIndustry}
          </Typography>
          <Typography
            variant="body2"
            fontWeight="light"
          >
            {`${companyAddress}, ${companyCity}`}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ bgcolor: 'primary.600', p: 1.5 }}>
        <Typography
          variant="body1"
        >
          {postTitle}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'primary.500', p: 1.5 }}>
        <Typography
          variant="body1"
        >
          {postDescription}
        </Typography>
      </Box>
      <Link to={`/praksa:${postId}`}>
        <Box sx={{
          bgcolor: 'accent.500',
          p: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <Typography
            variant="body1"
            fontWeight="semiBold"
          >
            Pročitaj više
          </Typography>
          <ArrowRightAltRoundedIcon />
          {/* TODO: vrijeme za prijavu je isteklo logic */}
        </Box>
      </Link>
    </Box>
  );
}

export default PostListItem;
