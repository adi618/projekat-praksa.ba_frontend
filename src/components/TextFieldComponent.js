import { Box, TextField, Typography } from '@mui/material';

function TextFieldComponent({
  required, label, register, name, errorMessage, type, width, multiline, minRows, disabled,
}) {
  return (
    <>
      <Box sx={{ width, mt: 2 }}>
        <TextField
          name={name}
          type={type}
          required={required}
          label={label}
          multiline={multiline}
          minRows={minRows}
          {...register(name)}
          autoComplete="off"
          sx={{
            width: '100%',
            '& .MuiInputLabel-asterisk': {
              color: 'error.main',
            },
          }}
          disabled={disabled}
        />
      </Box>
      <Box sx={{ width }}>
        <Typography variant="caption" sx={{ display: 'block', color: 'error.main', textAlign: 'right' }}>{errorMessage}</Typography>
      </Box>
    </>
  );
}

TextFieldComponent.defaultProps = { width: '80%' };

export default TextFieldComponent;
