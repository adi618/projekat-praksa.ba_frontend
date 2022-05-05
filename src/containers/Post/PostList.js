import { Box } from '@mui/material';
import { DRAWER } from '../../constants';
import PostListItem from './PostListItem';

function PostList({
  posts,
}) {
  return (
    <Box
      sx={{
        px: 2,
        width: { md: `calc(100% - ${DRAWER.WIDTH})` },
        ml: { md: `${DRAWER.WIDTH}` },
      }}
    >
      {posts.map((post) => (
        <PostListItem
          key={post.id}
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
