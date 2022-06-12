import {
  Box,
  Typography,
  Chip,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function MultipleSelect({
  title,
  options,
  selectedOptions,
  handleOptionsChange,
  name,
  register,
  errorMessage,
}) {
  return (
    // TODO: fix width
    <FormControl sx={{ mt: 2, width: { xs: '100%', lg: '60%' } }}>
      <InputLabel id={name}>{title}</InputLabel>
      <Select
        {...register(name)}
        labelId={name}
        multiple
        value={selectedOptions}
        onChange={handleOptionsChange}
        input={<OutlinedInput label={name} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            },
          },
        }}
      >
        {options.map((location) => (
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        ))}
      </Select>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          color: 'error.main',
          textAlign: 'right',
        }}
      >
        {errorMessage}
      </Typography>
    </FormControl>
  );
}

export default MultipleSelect;
