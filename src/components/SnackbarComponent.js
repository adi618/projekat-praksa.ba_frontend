import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSnackbar } from '../features/snackbar';

const Alert = forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function SnackbarComponent() {
  const dispatch = useDispatch();
  const { isVisible, message, variant } = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={variant}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
