import { Box, TextField, Typography } from '@mui/material';

function TextFieldComponent({
  required, label, register, name, errorMessage, type, width, multiline, minRows,
}) {
  return (
    <Box sx={{ width }}>
      <TextField
        name={name}
        type={type}
        variant="filled"
        required={required}
        label={label}
        multiline={multiline}
        minRows={minRows}
        {...register(name)}
        autoComplete="off"
        sx={(theme) => ({
          width: '100%',
          mt: 2,
          '& .MuiFilledInput-input': {
            borderRadius: 4,
            bgcolor: 'white',
            p: multiline ? 2 : null,
            border: errorMessage ? `1px solid ${theme.palette.error.main}` : null,
          },
          '& .MuiInputLabel-root': {
            color: 'text.grey.700',
            fontWeight: 'medium',
            pt: multiline ? 2.8 : null,
            pl: multiline ? 1 : null,
          },
          '& .MuiInputLabel-asterisk': {
            color: 'error.main',
          },
          '& .MuiFilledInput-root': {
            bgcolor: 'inherit',
          },
          '& .MuiFilledInput-root:hover': {
            bgcolor: 'inherit',
          },
          '& .Mui-focused': {
            bgcolor: 'inherit',
          },
        })}
        InputProps={{ disableUnderline: true, style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 12, lineHeight: 1.7 } }} // font size of input label
      />
      <Typography variant="caption" sx={{ display: 'block', color: 'error.main', textAlign: 'right' }}>{errorMessage}</Typography>
    </Box>
  );
}

TextFieldComponent.defaultProps = { width: '80%' };

export default TextFieldComponent;
