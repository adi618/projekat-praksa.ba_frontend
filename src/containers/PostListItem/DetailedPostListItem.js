import { Box } from '@mui/material';
import PostListItemDetailedFooter from './PostListItemDetailedFooter';
import PostListItemDetailedInfo from './PostListItemDetailedInfo';
import PostListItemHeader from './PostListItemHeader';
import PostListItemMainInfo from './PostListItemMainInfo';

function DetailedPostListItem({
  companyId,
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
  isPostExpired,
}) {
  return (
    <Box sx={{ borderRadius: 4, overflow: 'hidden', m: 3 }}>
      <PostListItemHeader
        companyId={companyId}
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
      <PostListItemDetailedFooter postId={postId} isPostExpired={isPostExpired} />
    </Box>
  );
}

export default DetailedPostListItem;
