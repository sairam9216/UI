import { blueedApi } from './../baseQuery';
import {
  GET_ALL_PROJECT_LIST_API_PATH,
  PROJECT_CREATE_API_PATH,
  PROJECT_DELETE_API_PATH,
  PROJECT_UPDATE_API_PATH,
  PROJECT_DROPDOWN_API_PATH
} from 'config/ApiList';
import { getRandomValue } from 'utils';
export const ProjectApi = blueedApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: ({ limit = 15, pagNum = 1 }) => {
        return {
          url: GET_ALL_PROJECT_LIST_API_PATH,
          method: 'GET',
          params: { PageSize: limit, PageNumber: pagNum }
        };
      },
      providesTags: ['ProjectApi']
    }),
    getAllProjectDropdown: builder.query({
      query: () => {
        return {
          url: PROJECT_DROPDOWN_API_PATH,
          method: 'GET'
        };
      },
      providesTags: ['ProjectApi']
    }),

    getInfiniteProjectList: builder.query({
      // query: ({ limit = 15, pagNum = 1 }) => {
      query: (paginationData) => {
        const { limit = 15, pagNum, search = '' } = paginationData;
        let randomValue = getRandomValue();
        return {
          url: GET_ALL_PROJECT_LIST_API_PATH,
          method: 'GET',
          // params: { PageSize: limit, PageNumber: pagNum, sid: randomValue }
          params: { PageSize: limit, PageNumber: pagNum, sid: randomValue, Name: search }
        };
      }
    }),
    addProject: builder.mutation({
      query: (body) => {
        return {
          url: PROJECT_CREATE_API_PATH,
          method: 'POST',
          body: body
        };
      },
      invalidatesTags: ['ProjectApi']
    }),
    updateProject: builder.mutation({
      query: (body) => {
        return {
          url: PROJECT_UPDATE_API_PATH,
          method: 'POST',
          body: body
        };
      },
      invalidatesTags: ['ProjectApi', 'DocumentApi']
    }),
    deleteProject: builder.mutation({
      query: (query) => {
        return {
          url: PROJECT_DELETE_API_PATH,
          method: 'DELETE',
          body: { projectID: query }
        };
      },
      invalidatesTags: ['ProjectApi']
    })
  })
});

export const {
  useGetAllProjectQuery,
  useGetAllProjectDropdownQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation
} = ProjectApi;
