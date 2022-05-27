import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia } from '@mui/material';
import { getPost } from '../api';
import { BACKEND_HOST } from '../constants';
import DetailedPostListItem from '../containers/PostListItem/DetailedPostListItem';

function Post() {
  const params = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getPost(params.id.slice(1));
      console.log(response);
      setPost(response.data);
    })();
  }, [params.id]);

  return (
    <>
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
            src={`${BACKEND_HOST}/${post?.company?.profilePhoto}`}
            alt="logo"
            height={100}
            width={100}
          />
        </Box>
        <Typography variant="h6" fontWeight="semiBold">
          {post?.company?.companyName}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="semiBold"
          color="text.lightGrey"
          pb={3}
        >
          {post?.company?.industry}
        </Typography>
        <Typography variant="body2" color="text.grey">
          {post?.company?.email}
        </Typography>
        <Typography variant="body2" color="text.grey" pb={3}>
          {post?.company?.address}
          ,
          {' '}
          {post?.company?.city}
        </Typography>
      </Box>
      <DetailedPostListItem
        companyProfilePhoto={post?.company?.profilePhoto}
        companyName={post?.company?.companyName}
        companyIndustry={post?.company?.industry}
        companyAddress={post?.company?.address}
        companyCity={post?.company?.city}
        postTitle={post.title}
        postDescription={post.description}
        postId={post._id}
        postIndustry={post.category}
        postLocation={post.location}
        postStartDate={post.startDate}
        postEndDate={post.endDate}
        postApplicationDue={post.applicationDue}
      />
    </>
  );
}

export default Post;
