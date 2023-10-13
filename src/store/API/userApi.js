/* eslint-disable */

import { blueedApi } from './../baseQuery';
import { GET_ALL_USER_LIST_API_PATH, GET_USER_PROFILE, UPDATE_USER_PROFILE, USER_SET_TOKEN } from 'config/ApiList';
export const UserApi = blueedApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: GET_ALL_USER_LIST_API_PATH,
          method: 'GET'
        };
      },
      providesTags: ['UserApi']
    }),
    getUserProfile: builder.query({
      query: () => {
        return {
          url: GET_USER_PROFILE,
          method: 'GET'
        };
      },
      providesTags: ['UserApi']
    }),
    updateUserProfile: builder.mutation({
      query: (body) => {
        return {
          url: UPDATE_USER_PROFILE,
          method: 'POST',
          body: body
        };
      },
      providesTags: ['UserApi']
    }),
    userSetToken: builder.mutation({
      query: (body) => {
        return {
          url: USER_SET_TOKEN,
          method: 'POST',
          body: body
        };
      },
      invalidatesTags: ['UserApi']
    }),
  })
});

export const { useGetUsersQuery, useGetUserProfileQuery, useUpdateUserProfileMutation, useUserSetTokenMutation } = UserApi;
