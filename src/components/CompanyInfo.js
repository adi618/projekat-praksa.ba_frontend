import { Box, Typography, CardMedia } from '@mui/material';
import { BACKEND_HOST } from '../constants';

function CompanyInfo({
  companyProfilePhoto,
  companyName,
  companyIndustry,
  companyEmail,
  companyAddress,
  companyCity,
}) {
  return (
    <Box
      bgcolor="primary.500"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={3}
    >
      <Box width="100px" py={3}>
        <CardMedia
          component="img"
          src={`${BACKEND_HOST}/${companyProfilePhoto}`}
          alt="logo"
          height={100}
          width={100}
        />
      </Box>
      <Typography variant="h6" fontWeight="semiBold">
        {companyName}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="semiBold"
        color="text.grey.700"
        pb={3}
      >
        {companyIndustry}
      </Typography>
      <Typography variant="body2" color="text.grey.800">
        {companyEmail}
      </Typography>
      <Typography variant="body2" color="text.grey.800" pb={3}>
        {companyAddress}
        ,
        {' '}
        {companyCity}
      </Typography>
    </Box>
  );
}

export default CompanyInfo;
