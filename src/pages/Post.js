import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api';
import DetailedPostListItem from '../containers/PostListItem/DetailedPostListItem';
import CompanyInfo from '../components/CompanyInfo';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';

function Post() {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPost(params.postId);
        setPost(response.data);
      } catch {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [params.postId]);

  if (isError) {
    return <ErrorMessage>Došlo je do greške. Objava za praksu nije pronađena.</ErrorMessage>;
  }

  if (isLoading) {
    return <Loader />;
  }

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
