import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { login, logout } from '../features/user';

function Home() {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value);
  // const [userState, setUserState] = useState('');
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

  // const onClickHandler = (state) => {
  //   if (user) {
  //     dispatch(logout(state));
  //   } else {
  //     dispatch(login(state));
  //   }
  // };

  return (
    <Box>
      <Typography variant="h3">Prakse</Typography>
      {posts.map((post) => (
        <Box sx={{
          border: '2px solid black', borderRadius: 5, m: 4, p: 4,
        }}
        >
          <Typography>
            {post.item}
          </Typography>
          <Link to={`/praksa:${post.id}`}>View</Link>
        </Box>
      ))}
    </Box>
  );
}

export default Home;
