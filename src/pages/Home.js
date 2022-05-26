import { useState } from 'react';
import {
  Box, Button, CircularProgress, Typography,
} from '@mui/material';
import PostListItem from '../containers/PostListItem/PostListItem';
import { useListPostsQuery } from '../services/posts';

function Home() {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isFetching } = useListPostsQuery(page);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25%',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (posts === undefined) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25%',
        }}
      >
        <Typography>No posts found.</Typography>
      </Box>
    );
  }

  return (
    <Box px={2}>
      {posts.map((post) => (
        <PostListItem
          key={post._id}
          companyProfilePhoto={post.company.profilePhoto}
          companyName={post.company.companyName}
          companyIndustry={post.company.industry}
          companyAddress={post.company.address}
          companyCity={post.company.city}
          postTitle={post.title}
          postDescription={post.description}
          postId={post._id}
        />
      ))}
      <Box m={3} display="flex" justifyContent="space-between">
        {page !== 1 ? <Button onClick={() => setPage(page - 1)}>Previous</Button> : <Box />}
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </Box>
  );
}

export default Home;
