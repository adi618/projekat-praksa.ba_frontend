import { Box } from '@mui/material';
import PostListItem from './PostListItem';

function PostList({
  posts,
}) {
  return (
    <Box mx={2}>
      {posts.map((post) => (
        <PostListItem
          id={post.id}
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