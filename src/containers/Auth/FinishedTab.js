import { Typography, Button, Box } from '@mui/material';

function FinishedTab() {
  return (
    <Box sx={{
      width: '100%',
      textAlign: 'center',
    }}
    >
      <Typography
        mb={5}
        variant="h1"
        fontWeight="extraBold"
      >
        praksa.ba
      </Typography>
      <Box sx={{ px: 4 }}>
        <Typography
          variant="body2"
          fontWeight="semiBold"
          sx={{ opacity: '50%' }}
        >
          Vaš zahtjev je zabilježen.
          <br />
          <br />
        </Typography>
        <Typography
          variant="body2"
          fontWeight="semiBold"
          sx={{ opacity: '50%' }}
        >
          U narednom periodu dobit ćete email koji će sadržavati
          automatski generisanu lozinku sa kojom ćete
          prvobitno pristupiti platformi, a koju ćete odmah
          nakon toga promijeniti.
          <br />
          <br />
        </Typography>
        <Typography
          variant="body2"
          fontWeight="semiBold"
          sx={{ opacity: '50%' }}
        >
          Nakon same verifikacije email računa na taj način
          ostvarujete mogućnost objavljivanja oglasa
          za praksu i svih drugih mogućnosti koje su
          pružene Vama kao kompaniji.
        </Typography>
      </Box>
      <Button
        variant="primary"
        sx={{ mt: 5 }}
      >
        Otvorite email aplikaciju
      </Button>
    </Box>
  );
}

export default FinishedTab;
