import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  TextField,
  Stack,
  Button,
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
import { createPost } from '../../api';

const schema = yup.object({
  title: yup.string().required('Obavezno polje'),
  description: yup.string().required('Obavezno polje'),
  location: yup.string().required('Obavezno polje'),
}).required();

function NewPostInput() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [applicationDueDate, setApplicationDueDate] = useState(null);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = getFormData(data);

    formData.append('startDate', `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}-${startDate.getHours()}`);

    formData.append('endDate', `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}-${endDate.getHours()}`);

    formData.append('applicationDue', `${applicationDueDate.getFullYear()}-${applicationDueDate.getMonth()}-${applicationDueDate.getDate()}-${applicationDueDate.getHours()}`);

    createPost(formData);
  };

  return (
    <Box sx={{ borderRadius: 4, overflow: 'hidden', m: 3 }}>
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextFieldComponent
              required
              label="Naslov"
              register={register}
              name="title"
              errorMessage={errors.title?.message}
              width={{ xs: '100%', lg: '60%' }}
            />
            <TextFieldComponent
              required
              label="Opis"
              register={register}
              name="description"
              errorMessage={errors.description?.message}
              width={{ xs: '100%', lg: '60%' }}
              multiline
              minRows={4}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={2} pt={2}>
                <DatePicker
                  label="Početak"
                  openTo="day"
                  views={['day', 'month', 'year']}
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                  label="Kraj"
                  openTo="day"
                  views={['day', 'month', 'year']}
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                  label="Rok za prijavu"
                  openTo="day"
                  views={['day', 'month', 'year']}
                  value={applicationDueDate}
                  onChange={(newValue) => {
                    setApplicationDueDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <TextFieldComponent
              required
              label="Lokacija"
              register={register}
              name="location"
              errorMessage={errors.location?.message}
              width="100%"
            />
            <Button
              type="submit"
              variant="primary"
              sx={{ mt: 5 }}
            >
              Postavite oglas
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default NewPostInput;
