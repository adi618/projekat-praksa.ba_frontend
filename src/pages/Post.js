import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, CardMedia } from '@mui/material';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { getPost } from '../api';
import { BACKEND_HOST } from '../constants';

function Post() {
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getPost(params.id.slice(1));
      console.log(response);
      setData(response.data);
    })();
  }, [params.id]);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'primary.500',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 3,
        }}
      >
        <Box sx={{ width: '100px', py: 3 }}>
          <CardMedia
            component="img"
            src={`${BACKEND_HOST}/profilePictures/1653316691786profile.png`}
            alt="logo"
            height={100}
            width={100}
          />
        </Box>
        <Typography variant="h6" fontWeight="semiBold">
          Politehnički fakultet
        </Typography>
        <Typography
          variant="body1"
          fontWeight="semiBold"
          color="text.lightGrey"
          pb={3}
        >
          Praksa za studente svih odsjeka
        </Typography>
        <Typography variant="body2" color="text.grey">
          ptf@unze.ba
        </Typography>
        <Typography variant="body2" color="text.grey" pb={3}>
          Fakultetska 1, 72000 Zenica
        </Typography>
      </Box>
      <Box bgcolor="primary.600" p={1.5} m={2}>
        <Box bgcolor="primary.600" p={1.5}>
          <Typography
            variant="body1"
          >
            Prilika za pkom slitehničkog fakulteta u Zenici!
          </Typography>
        </Box>
        <Box bgcolor="primary.500" p={1.5}>
          <Typography
            variant="body1"
          >
            Plitehnički
          </Typography>
        </Box>
        <Link to={`/praksa:${params.id}`}>
          <Box sx={{
            bgcolor: 'accent.500',
            p: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
          }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 'semiBold', textDecoration: 'none' }}
            >
              Prijavi se
            </Typography>
            <ArrowRightAltRoundedIcon />
          </Box>
        </Link>
      </Box>
    </>
  );
}

export default Post;
