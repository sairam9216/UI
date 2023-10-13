/* eslint-disable */
import { blueedApi } from './../baseQuery';
import {
  DOCUMENT_CREATE_API_PATH,
  DOCUMENT_DELETE_API_PATH,
  GET_ALL_DOCUMENT_LIST_API_PATH,
  GET_DOCUMENT_EDIT_LINK_API_PATH,
  GET_PROJECT_DOCUMENT_LIST_API_PATH,
  SEND_FOR_REVIEW_API_PATH,
  DOCUMENT_PREVIEW_API_PATH,
  DOCUMENT_COPY_API_PATH,
  DOCUMENT_GENERATE_THUMBNAIL,
  DOCUMENT_REVIEW_EDIT_LINK,
  GET_DOCUMENT_CREATE_COPY_LINK_API_PATH,
  DOCUMENT_GET_BY_ID,
  DOCUMENT_HISTORY_DETAIL,
  GET_DOCUMENT_COMPARE,
  DOCUMENT_COMPARE,
  DOCUMENT_GET_IMAGES,
  DOCUMENT_SIGNATURE_DRAFT,
  GET_SIGNED_DOCUMENT_LIST,
  GET_SPECIFIC_SIGNED_DOCUMENT
} from 'config/ApiList';
export const DocumentApi = blueedApi.injectEndpoints({
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: (paginationData) => {
        const { IsShared = false, limit = 15, pagNum, search = '' } = paginationData;
        return {
          url: GET_ALL_DOCUMENT_LIST_API_PATH,
          method: 'GET',
          params: {
            IsShared: IsShared,
            PageSize: limit,
            PageNumber: pagNum,
            Name: search
          }
        };
      },
      providesTags: ['DocumentApi']
    }),
    getProjectDocuments: builder.query({
      query: (params) => {
        return {
          url: GET_PROJECT_DOCUMENT_LIST_API_PATH,
          method: 'GET',
          params: params
        };
      },
      providesTags: ['DocumentApi']
    }),
    getDocumentEditLink: builder.query({
      query: (data) => {
        return {
          url: GET_DOCUMENT_EDIT_LINK_API_PATH,
          method: 'GET',
          params: { DriveItemID: data?.Id, DocumentActionUserID: data?.documentActionUserID }
        };
      }
    }),
    getDocumentLinkCreateCopy: builder.query({
      query: (data) => {
        return {
          url: GET_DOCUMENT_CREATE_COPY_LINK_API_PATH,
          method: 'GET',
          params: { DriveItemID: data?.Id, DocumentActionUserID: data?.documentActionUserID }
        };
      }
    }),
    getDocumentById: builder.query({
      query: (data) => {
        return {
          url: DOCUMENT_GET_BY_ID,
          method: 'GET',
          params: { ID: data }
        };
      }
    }),
    getDocumentReviewEditLink: builder.query({
      query: (body) => {
        return {
          url: DOCUMENT_REVIEW_EDIT_LINK,
          method: 'POST',
          body: body
        };
      }
    }),
    getDocumentHistoryDetail: builder.query({
      query: (data) => {
        return {
          url: DOCUMENT_HISTORY_DETAIL,
          method: 'GET',
          params: data
        };
      }
    }),
    sendForReviewCall: builder.query({
      query: (body) => {
        return {
          url: SEND_FOR_REVIEW_API_PATH,
          method: 'POST',
          body: body
        };
      }
    }),
    addDocument: builder.mutation({
      query: (body) => {
        return {
          url: DOCUMENT_CREATE_API_PATH,
          method: 'POST',
          body: body
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    deleteDocument: builder.mutation({
      query: (query) => {
        return {
          url: DOCUMENT_DELETE_API_PATH,
          method: 'DELETE',
          params: { documentId: query }
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    documentPreview: builder.query({
      query: (params) => {
        return {
          url: DOCUMENT_PREVIEW_API_PATH,
          method: 'GET',
          params: {
            DriveItemID: params.driveItemID,
            DocumentActionUserID: params.documentActionUserID
          }
        };
      }
    }),
    documentCopy: builder.mutation({
      query: (body) => {
        return {
          url: DOCUMENT_COPY_API_PATH,
          method: 'POST',
          body: body
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    documentCompare: builder.mutation({
      query: (body) => {
        return {
          url: DOCUMENT_COMPARE,
          method: 'POST',
          body: body
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    documentThumbnail: builder.mutation({
      query: (data) => {
        return {
          url: DOCUMENT_GENERATE_THUMBNAIL,
          method: 'GET',
          params: {
            DriveItemID: data?.driveItemID,
            DocumentActionUserID: data?.documentActionUserID
          }
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    getDocumentCompareOptions: builder.query({
      query: (data) => {
        return {
          url: GET_DOCUMENT_COMPARE,
          method: 'GET',
          params: {
            ID: data
          }
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    getDocumentImages: builder.query({
      query: (data) => {
        const { DocumentActionUserID, PageNo = 0 } = data;
        return {
          url: DOCUMENT_GET_IMAGES,
          method: 'GET',
          params: {
            DocumentActionUserID: DocumentActionUserID,
            PageNo: PageNo
          }
        };
      },
      invalidatesTags: ['DocumentApi']
    }),
    getDocumentSignatureDraft: builder.query({
      query: (data) => {
        return {
          url: DOCUMENT_SIGNATURE_DRAFT,
          method: 'GET',
          params: data
        };
      }
    }),
    documentSignatureSaveDraft: builder.query({
      query: (body) => {
        return {
          url: DOCUMENT_SIGNATURE_DRAFT,
          method: 'POST',
          body: body
        };
      }
    }),
    getSignedDocumentList: builder.query({
      query: (data) => {
        return {
          url: GET_SIGNED_DOCUMENT_LIST,
          method: 'GET',
          params: data
        };
      }
    }),
    getSpecificSignedDocument: builder.query({
      query: (data) => {
        return {
          url: GET_SPECIFIC_SIGNED_DOCUMENT,
          method: 'GET',
          params: data
        };
      }
    }),
  })
});

export const {
  useGetDocumentsQuery,
  useGetProjectDocumentsQuery,
  useAddDocumentMutation,
  useDeleteDocumentMutation,
  useDocumentCopyMutation,
  useSendForReviewCallQuery,
  useDocumentPreviewMutation,
  useDocumentThumbnailMutation,
  useGetDocumentReviewEditLinkQuery,
  useGetDocumentByIdQuery,
  useGetDocumentHistoryDetailQuery,
  useGetDocumentCompareOptionsQuery,
  useDocumentCompareMutation,
  useGetDocumentImagesQuery,
  useGetDocumentSignatureDraftQuery,
  useDocumentSignatureSaveDraftQuery,
  useGetSignedDocumentListQuery,
  useGetSpecificSignedDocumentQuery
} = DocumentApi;
