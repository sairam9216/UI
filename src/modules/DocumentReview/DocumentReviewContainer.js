import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDocumentReviewEditLinkQuery } from 'store/API/documentApi';
import AlertMessage from 'utils/AlertMessage';
import { Loader } from 'components';
import { getSharePointUrl } from 'utils';

const DocumentReviewContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, error } = useGetDocumentReviewEditLinkQuery(
    { referenceID: params?.id },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (data && data?.status) {
      let shareAddress = getSharePointUrl(data?.data);
      window.location.replace(shareAddress);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error?.status === 400) {
        AlertMessage(error.data.message, 'error');
      }
      navigate('/dashboard');
    }
  }, [error]);

  return <Loader />;
};

export default DocumentReviewContainer;
