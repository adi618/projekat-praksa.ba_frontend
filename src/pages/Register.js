import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Box, CardMedia } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { useDispatch } from 'react-redux';
import { REGEX } from '../constants';
import TextFieldComponent from '../components/TextFieldComponent';
import { signUpUser } from '../features/user';
import { getFormData } from '../util/helpers';

const requiredErrorMessage = 'Obavezno polje';
const invalidEmailErrorMessage = 'Nevažeća email adresa';

const schema = yup.object({
  companyName: yup.string().required(requiredErrorMessage),
  email: yup.string().required(requiredErrorMessage).matches(REGEX.EMAIL, invalidEmailErrorMessage),
  password: yup.string().required(requiredErrorMessage).min(5, 'Prekratka lozinka'),
  confirmPassword: yup.string().required(requiredErrorMessage).oneOf([yup.ref('password')], 'Lozinke se ne poklapaju'),
  industry: yup.string().required(requiredErrorMessage),
  city: yup.string().required(requiredErrorMessage),
  address: yup.string().required(requiredErrorMessage),
}).required();

function Register() {
  const [selectedFile, setSelectedFile] = useState();
  const [previewImage, setPreviewImage] = useState();
  const pictureUpload = useRef();
  const dispatch = useDispatch();

  const uploadPictureRef = () => {
    pictureUpload.current.click();
  };

  const fileSelectedHandler = (event) => {
    if (event.target.files.length !== 0) {
      setSelectedFile(event.target.files[0]);
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = getFormData(data);

    formData.append('profilePicture', selectedFile);

    dispatch(signUpUser(formData));
  };

  return (
    <>
      <Box
        encType="multipart/form-data"
        component="form"
        method="post"
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
        <input
          type="file"
          name="file"
          style={{ display: 'none' }}
          onChange={fileSelectedHandler}
          ref={pictureUpload}
          accept="image/x-png,image/jpeg"
        />
        <Box
          sx={(theme) => ({
            width: 175,
            height: 175,
            borderRadius: '50%',
            boxShadow: `0 0 0px 2px ${theme.palette.primary[600]}`,
            bgcolor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
            overflow: 'hidden',
          })}
          onClick={uploadPictureRef}
        >
          {
            previewImage ? (
              <CardMedia
                component="img"
                image={previewImage}
                alt="uploaded picture preview"
                sx={{ height: 175, width: 175 }}
                // TODO: check how different image resolutions act
                // maybe limit upload to pictures with the same height and width
              />
            ) : (
              <AddPhotoAlternateOutlinedIcon
                fontSize="large"
              />
            )
          }
        </Box>
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
          <TextFieldComponent
            required
            label="Lozinka"
            register={register}
            name="password"
            errorMessage={errors.password?.message}
            type="password"
            width="48%"
          />
          <TextFieldComponent
            required
            label="Potvrdite lozinku"
            register={register}
            name="confirmPassword"
            errorMessage={errors.confirmPassword?.message}
            type="password"
            width="48%"
          />
        </Box>
        <TextFieldComponent
          required
          label="Industrija (IT, Farmacija, itd.)"
          register={register}
          name="industry"
          errorMessage={errors.industry?.message}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
          <TextFieldComponent
            required
            label="Grad"
            register={register}
            name="city"
            errorMessage={errors.city?.message}
            width="30%"
          />
          <TextFieldComponent
            required
            label="Adresa"
            register={register}
            name="address"
            errorMessage={errors.address?.message}
            width="66%"
          />
        </Box>
        <Button
          type="submit"
          variant="primary"
          sx={{ mt: 5 }}
          className="register"
        >
          Registrujte se
        </Button>
      </Box>
      <Box />
    </>
  );
}

export default Register;
