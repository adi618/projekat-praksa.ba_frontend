import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

function PostListItemFooter({ postId }) {
  return (
    <Link to={`/praksa:${postId}`}>
      <Box
        sx={{
          bgcolor: 'accent.500',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" fontWeight="semiBold">
          Pročitaj više
        </Typography>
        <ArrowRightAltRoundedIcon />
      </Box>
    </Link>
  );
}

export default PostListItemFooter;
