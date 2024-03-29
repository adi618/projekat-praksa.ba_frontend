import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_HOST } from '../constants';

export const api = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_HOST}/api/` }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: ({ companyId = false, page = 1 }) => `posts?page=${page}&limit=10${companyId ? `&id=${companyId}` : ''}`,
    }),
  }),
});

export const { useListPostsQuery } = api;
