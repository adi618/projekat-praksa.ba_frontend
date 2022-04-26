import { TextField, Typography } from '@mui/material';

function TextFieldComponent({
  required, label, register, name, errorMessage,
}) {
  return (
    <>
      <TextField
        variant="filled"
        required={required}
        label={label}
        {...register(name)}
        autoComplete="off"
        sx={(theme) => ({
          width: '80vw',
          mt: 2,
          bgcolor: 'white',
          '& .MuiFilledInput-root': {
            bgcolor: 'primary.500',
          },
          '& .MuiFilledInput-input': {
            borderRadius: 4,
            bgcolor: 'white',
            border: errorMessage ? `1px solid ${theme.palette.error.main}` : null,
          },
          '& .MuiInputLabel-root': {
            color: 'black', opacity: '50%', fontWeight: 'medium',
          },
          '& .MuiInputLabel-asterisk': {
            color: 'error.main',
          },
        })}
        InputProps={{ disableUnderline: true, style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 12, lineHeight: 1.7 } }} // font size of input label
      />
      <Typography variant="caption" sx={{ display: 'block', color: 'error.main', textAlign: 'right' }}>{errorMessage}</Typography>
    </>
  );
}

export default TextFieldComponent;
