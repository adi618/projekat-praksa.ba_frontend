import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button, Typography, Box,
} from '@mui/material';
import { REGEX } from '../../constants';
import TextFieldComponent from '../../components/TextFieldComponent';

const requiredErrorMessage = 'Obavezno polje';
const invalidEmailErrorMessage = 'Nevažeća email adresa';

const schema = yup.object({
  companyName: yup.string().required(requiredErrorMessage),
  email: yup.string().required(requiredErrorMessage).matches(REGEX.EMAIL, invalidEmailErrorMessage),
  industry: yup.string().required(requiredErrorMessage),
  address: yup.string().required(requiredErrorMessage),
}).required();

function RegisterTab() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextFieldComponent
        required
        label="Naziv kompanije"
        register={register}
        name="companyName"
        errorMessage={errors.companyName?.message}
      />

      <TextFieldComponent
        required
        label="Email"
        register={register}
        name="email"
        errorMessage={errors.email?.message}
      />

      <TextFieldComponent
        required
        label="Industrija (IT, Farmacija, itd.)"
        register={register}
        name="industry"
        errorMessage={errors.industry?.message}
      />

      <TextFieldComponent
        required
        label="Adresa"
        register={register}
        name="address"
        errorMessage={errors.address?.message}
      />
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" variant="primary">Pošalji zahtjev</Button>
      </Box>
    </form>
  );
}

export default RegisterTab;
