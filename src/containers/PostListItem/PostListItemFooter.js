import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { ROUTE_PATHS } from '../../constants';

function PostListItemFooter({ postId, isPostExpired }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: isPostExpired ? 'primary.main' : 'accent.500',
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`${ROUTE_PATHS.POST}/${postId}`)}
    >
      <Box sx={{ color: isPostExpired ? 'text.grey.500' : '' }}>
        <Typography variant="body1" fontWeight="semiBold">
          Pročitaj više
        </Typography>
        {isPostExpired && <Typography>(Rok za prijavu je istekao)</Typography>}
      </Box>
      <ArrowRightAltRoundedIcon sx={{ color: isPostExpired ? 'text.grey.500' : '' }} />
    </Box>
  );
}

export default PostListItemFooter;
