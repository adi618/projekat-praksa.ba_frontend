import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { DescriptionOutlined } from '@mui/icons-material';
import Post from '../../pages/Post';

function PostListItem({
  id, title, image, imageAlt, location, shortDescription, description,
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
        <img
          src={image}
          alt={imageAlt}
          height={70}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
        <Box pl={1.5}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'semiBold' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'semiBold' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 'light' }}
          >
            {location}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ bgcolor: 'primary.600', p: 1.5 }}>
        <Typography
          variant="body1"
        >
          {shortDescription}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'primary.500', p: 1.5 }}>
        <Typography
          variant="body1"
        >
          {(description.length > 250) ? description.substring(0, 250).concat('...') : description}
        </Typography>
      </Box>
      <Link to={`/praksa:${id}`}>
        <Box sx={{
          bgcolor: 'accent.500',
          p: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'semiBold', textDecoration: 'none' }}
          >
            Pročitaj više
          </Typography>
          <ArrowRightAltRoundedIcon />
        </Box>
      </Link>
    </Box>
  );
}

export default PostListItem;
