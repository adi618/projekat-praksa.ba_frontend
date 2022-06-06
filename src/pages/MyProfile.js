import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { getCompany } from '../api';
import CompanyInfo from '../components/CompanyInfo';
import PostListItem from '../containers/PostListItem/PostListItem';
import { useListPostsQuery } from '../services/posts';
import { SEARCH_PARAMS } from '../constants';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import NewPostInput from '../containers/MyProfile/NewPostInput';

function MyProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = (Number(searchParams.get(SEARCH_PARAMS.PAGE)) || 1);
  const [page, setPage] = useState(pageNumber);
  const userData = useSelector((state) => state.user);
  const { _id: companyId } = userData.user;
  const [company, setCompany] = useState({});
  const [isLoadingCompanyError, setIsLoadingCompanyError] = useState(false);
  const [isLoadingCompany, setIsLoadingCompany] = useState(true);
  const { data: postsData, isLoading: isLoadingPosts } = useListPostsQuery({ companyId, page });

  useEffect(() => {
    setPage(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    (async () => {
      try {
        const companyResponse = await getCompany(companyId);
        setCompany(companyResponse.data);
      } catch {
        setIsLoadingCompanyError(true);
      }
      setIsLoadingCompany(false);
    })();
  }, [companyId]);

  const handleChange = (event, value) => {
    setSearchParams({ [SEARCH_PARAMS.PAGE]: value });
    setPage(value);
  };

  if (isLoadingPosts || isLoadingCompany) {
    return (
      <Loader />
    );
  }

  if (isLoadingCompanyError) {
    return (
      <ErrorMessage>Niste još objavili oglas za praksu.</ErrorMessage>
    );
  }

  return (
    <>
      <Box
        bgcolor="primary.500"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={3}
      >
        <CompanyInfo
          companyProfilePhoto={company?.profilePhoto}
          companyName={company?.companyName}
          companyIndustry={company?.industry}
          companyEmail={company?.email}
          companyAddress={company?.address}
          companyCity={company?.city}
        />
      </Box>
      <NewPostInput />
      {postsData === undefined
        ? (
          <ErrorMessage>Još niste objavili oglas za praksu.</ErrorMessage>
        )
        : (
          <>
            { postsData.results?.map((post) => (
              <PostListItem
                key={post._id}
                companyId={post.company._id}
                companyProfilePhoto={post.company.profilePhoto}
                companyName={post.company.companyName}
                companyIndustry={post.company.industry}
                companyAddress={post.company.address}
                companyCity={post.company.city}
                postTitle={post.title}
                postDescription={post.description}
                postId={post._id}
                isPostExpired={new Date(post.applicationDue) < new Date()}
              />
            ))}
            <Box display="flex" justifyContent="center" pb={3}>
              <Pagination
                count={postsData.numberOfPages}
                page={page}
                onChange={handleChange}
                shape="rounded"
              />
            </Box>
          </>
        )}
    </>
  );
}

export default MyProfile;
