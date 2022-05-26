import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_HOST } from '../constants';

export const api = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_HOST}/api/` }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 1) => `posts?page=${page}`,
    }),
  }),
});

export const { useListPostsQuery } = api;
