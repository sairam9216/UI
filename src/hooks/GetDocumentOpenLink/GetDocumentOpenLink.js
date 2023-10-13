import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { DocumentApi } from 'store/API/documentApi';
import { getSharePointUrl } from 'utils';

const useGetDocumentOpenLink = () => {
  const dispatch = useDispatch();
  const [isLinkClickLoading, setIsLinkClickLoading] = useState(false);
  const [isAskForViewOrCreateDocumentModal, setAskForViewOrCreateDocumentModal] = useState(false);
  const [docInfo, setDocInfo] = useState('');

  const documentViewEditLink = async (docInfoObj = '') => {
    try {
      setIsLinkClickLoading(true);
      hideAskForViewOrCreateModal();
      let docInfoDetail = docInfoObj ? docInfoObj : docInfo;
      const docData = {
        Id: docInfoDetail?.driveItemID,
        documentActionUserID: docInfoDetail?.documentActionUserID
      };
      const result = await dispatch(
        DocumentApi.endpoints.getDocumentEditLink.initiate(docData, { forceRefetch: true })
      );
      if (result?.data?.status && result?.data?.data) {
        const url = getSharePointUrl(result?.data?.data);
        window.location = url;
      }
      setIsLinkClickLoading(false);
    } catch (error) {
      setIsLinkClickLoading(false);
    }
  };

  const documentCreateCopyLink = async () => {
    try {
      setIsLinkClickLoading(true);
      hideAskForViewOrCreateModal();
      let docInfoDetail = docInfo || {};
      const docData = {
        Id: docInfoDetail?.driveItemID,
        documentActionUserID: docInfoDetail?.documentActionUserID
      };
      const result = await dispatch(
        DocumentApi.endpoints.getDocumentLinkCreateCopy.initiate(docData, { forceRefetch: true })
      );
      if (result?.data?.status && result?.data?.data) {
        const url = getSharePointUrl(result?.data?.data);
        window.location = url;
      }
      setIsLinkClickLoading(false);
    } catch (error) {
      setIsLinkClickLoading(false);
    }
  };

  const documentLinkClick = async (e, docInfoObj) => {
    if (e) e.stopPropagation();
    if (docInfoObj.isLocked) {
      setDocInfo(docInfoObj);
      setAskForViewOrCreateDocumentModal(true);
    } else {
      documentViewEditLink(docInfoObj);
    }
  };

  const hideAskForViewOrCreateModal = () => {
    setAskForViewOrCreateDocumentModal(false);
  };

  return {
    documentLinkClick,
    isLinkClickLoading,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  };
};

export default useGetDocumentOpenLink;
