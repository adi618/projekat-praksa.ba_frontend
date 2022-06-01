import { useState } from 'react';
import {
  Box,
  CircularProgress,
  Pagination,
  Typography,
} from '@mui/material';
import PostListItem from '../containers/PostListItem/PostListItem';
import { useListPostsQuery } from '../services/posts';

function PostList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useListPostsQuery({ page });

  const handleChange = (event, value) => {
    setPage(value);
  };

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

  if (data === undefined) {
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

  const { results: posts } = data;

  return (
    <Box px={2}>
      {posts.map((post) => (
        <PostListItem
          key={post._id}
          companyId={post.company._id}
          companyProfilePhoto={post.company.profilePhoto}
          companyName={post.company.companyName}
          companyIndustry={post.company.industry}
          companyAddress={post.company.address}
          companyCity={post.company.city}
          postTitle={post.title}
          postDescription={post.description}
          postId={post._id}
          isPostExpired={new Date(post.applicationDue) < new Date()}
        />
      ))}
      <Box display="flex" justifyContent="center" pb={3}>
        <Pagination
          count={data.numberOfPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
        />
      </Box>
    </Box>
  );
}

export default PostList;
