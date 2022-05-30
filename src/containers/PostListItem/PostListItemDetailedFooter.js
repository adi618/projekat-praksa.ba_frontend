import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { ROUTE_PATHS } from '../../constants';

function PostListItemDetailedFooter({ postId, isPostExpired }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: 'accent.500',
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        cursor: isPostExpired ? '' : 'pointer',
      }}
      onClick={isPostExpired ? null : () => navigate(`${ROUTE_PATHS.POST}/${postId}`)}
      // TODO: change onClick function
    >
      {isPostExpired ? (
        <Typography variant="body1" fontWeight="semiBold">
          Vrijeme za prijavu je isteklo
        </Typography>
      )
        : (
          <>
            <Typography variant="body1" fontWeight="semiBold">
              Prijavi se
            </Typography>
            <ArrowRightAltRoundedIcon />
          </>
        )}
    </Box>
  );
}

export default PostListItemDetailedFooter;
