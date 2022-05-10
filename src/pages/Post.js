import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

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
    <Box sx={{ bgcolor: 'primary.500' }}>
      <img src="https://ptf.unze.ba/wp/wp-content/uploads/2017/11/Logo-PTF-2.jpg" alt="logo" />
      <Typography>
        Politehnički fakultet
        <br />
        Praksa za studente svih odsjeka
        <br />
        +387 32 449 120
        <br />
        ptf@unze.ba
        <br />
        Fakultetska 1, 72000 Zenica
      </Typography>
      <Box sx={{ bgcolor: 'primary.600', p: 1.5, m: 50 }}>
        <Box sx={{ bgcolor: 'primary.600', p: 1.5 }}>
          <Typography
            variant="body1"
          >
            Prilika za praksu tokom studiranja, postani dio ekipe Politehničkog fakulteta u Zenici!
          </Typography>
        </Box>
        <Box sx={{ bgcolor: 'primary.500', p: 1.5 }}>
          <Typography
            variant="body1"
          >
            Plitehnički fakultet u Zenici objavljuje oglas za studentsku praksu za studente Politeh.
            <br />
            Paksa će obuhvatati segmente vezane za smjer koji studirate, a vodit će je tim profesora
            <br />
            Svi zainteresovani studenti mogu se prijaviti slanjem e-maila na ptf@unze.ba
            <br />
            Početak? Planirano je da praksa počne ubrzo nakon početka ljetnog semestra.
            <br />
            Trajanje? Planirano trajanje prakse je dva (2) mjeseca.
            <br />
            Lokacija? Fakultetska 1, 72000 Zenica
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
    </Box>
  );
}

export default Post;
