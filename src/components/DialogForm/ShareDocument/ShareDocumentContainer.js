import React, { useState } from 'react';
import ShareDocument from './ShareDocument';
import * as Yup from 'yup';
import i18n from 'i18next';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { DocumentApi } from 'store/API/documentApi';
import ResponseHandler from 'utils/ResponseHandler';
import AlertMessage from 'utils/AlertMessage';
const ShareDocumentContainer = ({ id, usersList, documentData, close, closeWithRefresh }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const DocumentReviewSchema = Yup.object().shape({
    users: Yup.array()
      .min(1, i18n.t('error.users_is_required'))
      .of(Yup.string().email(({ value }) => `${value} is not a valid email`)),
    // users: Yup.array().min(1, i18n.t('error.users_is_required')).required(),
    message: Yup.string()
      .trim()
      .max(250, 'Message has to be grater than 250 characters!')
      .required(i18n.t('error.message_is_required')),
    subject: Yup.string().required()
  });

  const submitForReview = async (value) => {
    try {
      setIsLoading(true);
      const result = await dispatch(
        DocumentApi.endpoints.sendForReviewCall.initiate({
          message: value.message,
          emailIDs: value.users,
          subject: value.subject,
          documentActionUserID: documentData?.documentActionUserID,
          driveItemID: documentData?.driveItemID,
          documentActivityMasterID: 2
        })
      );
      if (result?.data?.status) {
        AlertMessage(result?.data?.message, 'success');
        closeWithRefresh();
      } else {
        ResponseHandler(result, close);
      }
      setIsLoading(false);
    } catch (error) {
      ResponseHandler(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ShareDocument
        validationSchema={DocumentReviewSchema}
        submitForReview={submitForReview}
        formType={id}
        usersList={usersList}
        docName={documentData?.name ? documentData?.name : documentData?.item}
      />
      {isLoading && <Loader />}
    </>
  );
};

ShareDocumentContainer.propTypes = {
  id: PropTypes.string,
  usersList: PropTypes.array,
  documentData: PropTypes.any,
  close: PropTypes.func,
  closeWithRefresh: PropTypes.func
};

export default ShareDocumentContainer;
