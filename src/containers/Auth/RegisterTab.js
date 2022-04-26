import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Box, CardMedia } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
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
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState();
  const pictureUpload = useRef();

  const uploadPictureRef = () => {
    pictureUpload.current.click();
  };

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data); // TODO: backend call

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={fileSelectedHandler}
          ref={pictureUpload}
          accept="image/x-png,image/gif,image/jpeg"
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
            image ? (
              <CardMedia
                component="img"
                image={image}
                alt="stfu"
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
        <Button type="submit" variant="primary" sx={{ mt: 5 }}>Pošalji zahtjev</Button>
      </form>
      <Box />
    </>
  );
}

export default RegisterTab;
