import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';

function Post() {
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      axios
        .get(`https://shoppingapiacme.herokuapp.com/shopping/?id=${params.id}`)
        .then((res) => {
          console.log(res);
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [params.id]);

  return (
    <Box sx={{ bgcolor: 'accent.500' }}>
      xd
    </Box>
  );
}

export default Post;
