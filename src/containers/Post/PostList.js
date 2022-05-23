/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import PostListItem from './PostListItem';

function PostList({
  posts,
}) {
  return (
    <Box px={2}>
      {posts.map((post) => (
        <PostListItem
          key={post._id}
          id={post._id}
          title={post.item}
          image={post.image}
          imageAlt={post.item}
          location={post.item}
          shortDescription={post.description.split(' ', 15).join(' ')}
          description={post.description}
        />
      ))}
    </Box>
  );
}

export default PostList;
