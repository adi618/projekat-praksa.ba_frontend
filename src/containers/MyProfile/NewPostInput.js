/* eslint-disable eqeqeq */
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
import { addDays, format, isDate } from 'date-fns';
import TextFieldComponent from '../../components/TextFieldComponent';
import { createPost } from '../../api';
import MultipleSelect from '../../components/MultipleSelect';
import { INDUSTRIES, LOCATIONS } from '../../constants';
import BasicSelect from '../../components/BasicSelect';

const schema = yup.object({
  title: yup.string().required('Obavezno polje'),
  description: yup.string().required('Obavezno polje'),
  industry: yup.string().required('Obavezno polje'),
  location: yup.array().min(1, 'Obavezno polje').required('Obavezno polje').nullable(),
}).required();

function NewPostInput() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [applicationDueDate, setApplicationDueDate] = useState(null);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [applicationDueDateError, setApplicationDueDateError] = useState(false);
  const [isCreatePostButtonClicked, setIsCreatePostButtonClicked] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState();

  const handleLocationsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLocations(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (startDateError || endDateError || applicationDueDateError) {
      return;
    }
    data.startDate = format(startDate, 'uuuu-MM-dd');
    data.endDate = format(endDate, 'uuuu-MM-dd');
    data.applicationDue = format(applicationDueDate, 'uuuu-MM-dd');
    data.category = data.industry;
    data.workTimeType = ['keno napusi se'];
    console.log(data);

    createPost(data);
  };

  const onSubmitButtonClick = () => {
    setIsCreatePostButtonClicked(true);
    if (!isDate(startDate)) {
      setStartDateError('Obavezno polje');
    }
    if (!isDate(endDate)) {
      setEndDateError('Obavezno polje');
    }
    if (!isDate(applicationDueDate)) {
      setApplicationDueDateError('Obavezno polje');
    }
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
                <Box>
                  <DatePicker
                    label={(
                      <Box sx={{ display: 'flex' }}>
                        <Typography>Početak</Typography>
                        <Typography color="error.main" pl="2px">*</Typography>
                      </Box>
                    )}
                    openTo="day"
                    views={['day', 'month', 'year']}
                    inputFormat="dd/MM/uuuu"
                    value={startDate}
                    onChange={(newValue) => {
                      if (newValue === null || newValue == 'Invalid Date') {
                        setStartDateError('Datum nije validan');
                      } else {
                        if (endDate <= newValue) {
                          setEndDateError('Datum kraja mora biti poslije datuma početka');
                        } else {
                          setEndDateError('');
                        }
                        if (applicationDueDate > newValue) {
                          setApplicationDueDateError('Rok prijave mora biti prije datuma početka');
                        } else {
                          setApplicationDueDateError('');
                        }
                        if (newValue < currentDate) {
                          setStartDateError('Datum početka ne može biti u prošlosti');
                        } else {
                          setStartDateError('');
                        }
                      }
                      setStartDate(new Date(newValue));
                    }}
                    minDate={currentDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                      />
                    )}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: 'error.main',
                      textAlign: 'right',
                    }}
                  >
                    {isCreatePostButtonClicked && startDateError}
                  </Typography>
                </Box>
                <Box>
                  <DatePicker
                    label={(
                      <Box sx={{ display: 'flex' }}>
                        <Typography>Kraj</Typography>
                        <Typography color="error.main" pl="2px">*</Typography>
                      </Box>
                    )}
                    openTo="day"
                    views={['day', 'month', 'year']}
                    inputFormat="dd/MM/uuuu"
                    value={endDate}
                    onChange={(newValue) => {
                      if (newValue === null || newValue == 'Invalid Date') {
                        setEndDateError('Datum nije validan');
                      } else if (newValue < currentDate) {
                        setEndDateError('Datum kraja ne može biti u prošlosti');
                      } else if (isDate(startDate) && newValue <= startDate) {
                        setEndDateError('Datum kraja mora biti poslije datuma početka');
                      } else {
                        setEndDateError('');
                      }
                      setEndDate(new Date(newValue));
                    }}
                    minDate={!startDateError ? addDays(startDate, 1) : currentDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                      />
                    )}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: 'error.main',
                      textAlign: 'right',
                    }}
                  >
                    {isCreatePostButtonClicked && endDateError}
                  </Typography>
                </Box>
                <Box>
                  <DatePicker
                    label={(
                      <Box sx={{ display: 'flex' }}>
                        <Typography>Rok za prijavu</Typography>
                        <Typography color="error.main" pl="2px">*</Typography>
                      </Box>
                    )}
                    openTo="day"
                    views={['day', 'month', 'year']}
                    inputFormat="dd/MM/uuuu"
                    value={applicationDueDate}
                    onChange={(newValue) => {
                      if (newValue === null || newValue == 'Invalid Date') {
                        setApplicationDueDateError('Datum nije validan');
                      } else if (newValue < currentDate) {
                        setApplicationDueDateError('Rok prijave ne može biti u prošlosti');
                      } else if (isDate(startDate) && newValue > startDate) {
                        setApplicationDueDateError('Rok prijave mora biti prije datuma početka');
                      } else {
                        setApplicationDueDateError('');
                      }
                      setApplicationDueDate(new Date(newValue));
                    }}
                    minDate={currentDate}
                    maxDate={!startDateError ? startDate : null}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                      />
                    )}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: 'error.main',
                      textAlign: 'right',
                    }}
                  >
                    {isCreatePostButtonClicked && applicationDueDateError}
                  </Typography>
                </Box>
              </Stack>
            </LocalizationProvider>
            <BasicSelect
              title="Industrija"
              name="industry"
              register={register}
              errorMessage={errors.industry?.message}
              options={INDUSTRIES}
              selectedOptions={selectedIndustry}
              handleOptionsChange={handleIndustryChange}
            />
            <MultipleSelect
              title="Lokacije"
              name="location"
              register={register}
              errorMessage={errors.location?.message}
              options={LOCATIONS}
              selectedOptions={selectedLocations}
              handleOptionsChange={handleLocationsChange}
            />
            <Button
              type="submit"
              variant="primary"
              sx={{ mt: 2 }}
              onClick={onSubmitButtonClick}
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
