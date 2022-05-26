import { Box, Typography } from '@mui/material';
import React from 'react';

function PostListItemDetailedInfo({
  postIndustry,
  postLocation,
  postStartDate,
  postEndDate,
  postApplicationDue,
}) {
  return (
    <Box bgcolor="primary.600">
      <Box p={2} pb={1.5}>
        <Typography color="text.lightGrey" fontWeight="semiBold" variant="caption">INDUSTRIJA</Typography>
        <Typography>{postIndustry}</Typography>
      </Box>
      <Box p={2} py={1.5}>
        <Typography color="text.lightGrey" fontWeight="semiBold" variant="caption">LOKACIJA</Typography>
        {postLocation?.map((location) => (
          <Typography key={location}>{location}</Typography>
        ))}
      </Box>
      <Box p={2} py={1.5}>
        <Typography color="text.lightGrey" fontWeight="semiBold" variant="caption">POČETAK</Typography>
        <Typography>{postStartDate && new Date(postStartDate).toDateString()}</Typography>
      </Box>
      <Box p={2} py={1.5}>
        <Typography color="text.lightGrey" fontWeight="semiBold" variant="caption">KRAJ</Typography>
        <Typography>{postEndDate && new Date(postEndDate).toDateString()}</Typography>
      </Box>
      <Box p={2} pt={1.5}>
        <Typography color="text.lightGrey" fontWeight="semiBold" variant="caption">ROK ZA PRIJAVU</Typography>
        <Typography>{postApplicationDue && new Date(postApplicationDue).toDateString()}</Typography>
      </Box>
    </Box>
  );
}

export default PostListItemDetailedInfo;
