import { Box } from '@mui/material';
import PostListItemDetailedInfo from './PostListItemDetailedInfo';
import PostListItemFooter from './PostListItemFooter';
import PostListItemHeader from './PostListItemHeader';
import PostListItemMainInfo from './PostListItemMainInfo';

function DetailedPostListItem({
  companyProfilePhoto,
  companyName,
  companyIndustry,
  companyAddress,
  companyCity,
  postTitle,
  postDescription,
  postId,
  postIndustry,
  postLocation,
  postStartDate,
  postEndDate,
  postApplicationDue,
}) {
  return (
    <Box sx={{ borderRadius: 4, overflow: 'hidden', m: 3 }}>
      <PostListItemHeader
        companyProfilePhoto={companyProfilePhoto}
        companyName={companyName}
        companyIndustry={companyIndustry}
        companyAddress={companyAddress}
        companyCity={companyCity}
      />
      <PostListItemMainInfo
        postTitle={postTitle}
        postDescription={postDescription}
      />
      <PostListItemDetailedInfo
        postIndustry={postIndustry}
        postLocation={postLocation}
        postStartDate={postStartDate}
        postEndDate={postEndDate}
        postApplicationDue={postApplicationDue}
      />
      <PostListItemFooter postId={postId} />
    </Box>
  );
}

export default DetailedPostListItem;
