import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants';

function EditPostInput() {
  return (
    <Box position="absolute" top={20} right={20}>
      <Link to={ROUTE_PATHS.EDIT_PROFILE}>
        <IconButton
          size="large"
          edge="start"
        // onClick={handleDrawerToggle}
          sx={{ mr: 2, color: 'black' }}
        >
          <EditIcon />
        </IconButton>
      </Link>
    </Box>
  );
}

export default EditPostInput;
