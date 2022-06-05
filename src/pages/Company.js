import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Pagination,
  Typography,
} from '@mui/material';
import { getCompany } from '../api';
import CompanyInfo from '../components/CompanyInfo';
import PostListItem from '../containers/PostListItem/PostListItem';
import { useListPostsQuery } from '../services/posts';
import { SEARCH_PARAMS } from '../constants';

function Company() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = (Number(searchParams.get(SEARCH_PARAMS.PAGE)) || 1);
  const [page, setPage] = useState(pageNumber);
  const { companyId } = useParams();
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25%',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isLoadingCompanyError) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25%',
        }}
      >
        <Typography>Došlo je do greške. Firma nije pronađena.</Typography>
      </Box>
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
      {postsData === undefined
        ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '25%',
            }}
          >
            <Typography>Ova firma nije još objavila oglas za praksu.</Typography>
          </Box>
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

export default Company;
