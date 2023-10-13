import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { getToken } from 'utils';
import { BASE_URL } from '../config';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const blueedApi = createApi({
  reducerPath: 'blueedApi',
  baseQuery: baseQuery,
  tagTypes: ['projectApi', 'documentApi', 'UserApi'],
  endpoints: () => ({})
});
