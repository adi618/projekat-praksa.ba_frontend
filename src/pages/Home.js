import { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../containers/Post/PostList';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      axios
        .get('https://shoppingapiacme.herokuapp.com/shopping')
        .then((res) => {
          console.log(res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  return (
    <PostList posts={posts} />
  );
}

export default Home;
