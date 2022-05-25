import { Box, Typography } from '@mui/material';

function PostListItemMainInfo({ postTitle, postDescription }) {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.600', p: 2 }}>
        <Typography variant="body1">
          {postTitle}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'primary.500', p: 2 }}>
        <Typography variant="body1">
          {postDescription}
        </Typography>
      </Box>
    </>
  );
}

export default PostListItemMainInfo;
