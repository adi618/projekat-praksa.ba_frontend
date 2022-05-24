import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getPosts } from '../api';
import PostListItem from '../containers/PostList/PostListItem';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getPosts();
      console.log(response);
      setPosts(response.data);
    })();
  }, []);

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
    </Box>
  );
}

export default Home;
