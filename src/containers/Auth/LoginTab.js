import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button, Box, Typography, CardMedia,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_COMPONENTS, REGEX } from '../../constants';
import TextFieldComponent from '../../components/TextFieldComponent';
import { signInUser } from '../../features/user';

const requiredErrorMessage = 'Obavezno polje';
const invalidEmailErrorMessage = 'Nevažeća email adresa';

const schema = yup.object({
  email: yup.string().required(requiredErrorMessage).matches(REGEX.EMAIL, invalidEmailErrorMessage),
  password: yup.string().required(requiredErrorMessage).min(5, 'Prekratka lozinka'),
}).required();

function LoginTab({ setCurrentComponent }) {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(signInUser(data));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          height: '100%',
          width: { xs: '100%', lg: '60%' },
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography
          sx={{ mb: 5, display: { md: 'none' } }}
          variant="h1"
          fontWeight="extraBold"
        >
          praksa.ba
        </Typography>
        <TextFieldComponent
          required
          label="Email"
          register={register}
          name="email"
          errorMessage={errors.email?.message}
        />
        <TextFieldComponent
          required
          label="Lozinka"
          register={register}
          name="password"
          errorMessage={errors.password?.message}
          type="password"
        />
        <Button
          type="submit"
          variant="primary"
          sx={{ mt: 5 }}
        >
          Prijavite se
        </Button>
        <Button
          type="submit"
          variant="primary"
          sx={{ mt: 2 }}
        >
          Zaboravili ste lozinku?
        </Button>
      </Box>
      <Box>
        {/* <CardMedia
          component="img"
          image={userData.user.profilePhoto}
          // sx={{ filter: 'brightness(70%)' }}
          alt="header"
        /> */}
      </Box>
    </Box>
  );
}

export default LoginTab;
