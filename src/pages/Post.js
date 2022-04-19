import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      axios
        .get(`https://shoppingapiacme.herokuapp.com/shopping/?id=${params.id}`)
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [params.id]);

  return (
    <div>
      xd
    </div>
  );
}
export default Post;
