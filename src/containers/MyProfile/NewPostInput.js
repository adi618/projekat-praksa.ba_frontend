import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextFieldComponent from '../../components/TextFieldComponent';
import { getFormData } from '../../util/helpers';

const schema = yup.object({
  email: yup.string().required('requiredErrorMessage'),
  password: yup.string().required('requiredErrorMessage').min(5, 'Prekratka lozinka'),
}).required();

function NewPostInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  const {
    register, handleSubmit, formState: { errors }, control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = getFormData(data);
    console.log(formData);
  };

  return (
    <Box sx={{ borderRadius: 4, overflow: 'hidden', m: 3 }}>
      {/* <Box sx={{ bgcolor: 'primary.600', p: 2 }}>
        Želite objaviti oglas za praksu?
      </Box> */}
      <Accordion
        disableGutters
        elevation={0}
        sx={{
          bgcolor: 'primary.600',
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ bgcolor: 'primary.main', color: 'white' }}
        >
          <Typography>Postavite oglas za praksu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            encType="multipart/form-data"
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
            }}
          >
            <TextFieldComponent
              required
              label="Naslov"
              register={register}
              name="email"
              errorMessage={errors.email?.message}
              width="100%"
            />
            <TextFieldComponent
              required
              label="Opis"
              register={register}
              name="email"
              errorMessage={errors.email?.message}
              width="100%"
            />
            <TextFieldComponent
              required
              label="Početak"
              register={register}
              name="email"
              errorMessage={errors.email?.message}
              width="100%"
            />
            <TextFieldComponent
              required
              label="Trajanje"
              register={register}
              name="email"
              errorMessage={errors.email?.message}
              width="100%"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Kraj"
                openTo="year"
                views={['day', 'month', 'year']}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextFieldComponent
              required
              label="Lokacija"
              register={register}
              name="email"
              errorMessage={errors.email?.message}
              width="100%"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default NewPostInput;
