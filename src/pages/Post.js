import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api';
import DetailedPostListItem from '../containers/PostListItem/DetailedPostListItem';
import CompanyInfo from '../components/CompanyInfo';

function Post() {
  const params = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getPost(params.postId);

      setPost(response.data);
    })();
  }, [params.postId]);

  return (
    <>
      <CompanyInfo
        companyProfilePhoto={post?.company?.profilePhoto}
        companyName={post?.company?.companyName}
        companyIndustry={post?.company?.industry}
        companyEmail={post?.company?.email}
        companyAddress={post?.company?.address}
        companyCity={post?.company?.city}
      />
      <DetailedPostListItem
        companyId={post?.company?._id}
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
        isPostExpired={new Date(post.applicationDue) < new Date()}
      />
    </>
  );
}

export default Post;
