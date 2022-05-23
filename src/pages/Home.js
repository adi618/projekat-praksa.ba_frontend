import { useEffect, useState } from 'react';
import PostList from '../containers/Post/PostList';
import { getPosts } from '../api';

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
    <PostList posts={posts} />
  );
}

export default Home;
