import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Box, Typography } from '@mui/material';
import { AUTH_COMPONENTS, REGEX } from '../../constants';
import TextFieldComponent from '../../components/TextFieldComponent';

const requiredErrorMessage = 'Obavezno polje';
const invalidEmailErrorMessage = 'Nevažeća email adresa';

const schema = yup.object({
  email: yup.string().required(requiredErrorMessage).matches(REGEX.EMAIL, invalidEmailErrorMessage),
  password: yup.string().required(requiredErrorMessage).min(6, 'Prekratka lozinka'),
}).required();

function LoginTab({ setCurrentComponent }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // TODO: backend call
    sessionStorage.setItem('registrationRequestSent', true);
    setCurrentComponent(AUTH_COMPONENTS.FINISHED);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography
          mb={5}
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
      <Box />
    </>
  );
}

export default LoginTab;
