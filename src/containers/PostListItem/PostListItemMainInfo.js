import { Box, Typography } from '@mui/material';

function PostListItemMainInfo({ postTitle, postDescription }) {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.600', p: 2 }}>
        <Typography variant="body1" fontWeight="medium">
          {postTitle}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'primary.500', p: 2 }}>
        <Typography
          variant="body1"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            lineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {postDescription}
        </Typography>
      </Box>
    </>
  );
}

export default PostListItemMainInfo;
