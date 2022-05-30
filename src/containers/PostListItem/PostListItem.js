import { Box } from '@mui/material';
import PostListItemFooter from './PostListItemFooter';
import PostListItemHeader from './PostListItemHeader';
import PostListItemMainInfo from './PostListItemMainInfo';

function PostListItem({
  companyId,
  companyProfilePhoto,
  companyName,
  companyIndustry,
  companyAddress,
  companyCity,
  postTitle,
  postDescription,
  postId,
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
      <PostListItemFooter postId={postId} />
    </Box>
  );
}

export default PostListItem;
