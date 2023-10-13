/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ProjectDocuments from './ProjectDocuments';
import { useGetProjectDocumentsQuery, useDeleteDocumentMutation } from 'store/API/documentApi';
import {
  DialogFormContainer,
  ConfirmationModal,
  ShareDocumentModal
} from 'components';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ResponseHandler from 'utils/ResponseHandler';
import { useNavigate, useParams } from 'react-router-dom';
import { getRandomValue } from 'utils';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import AlertMessage from 'utils/AlertMessage';
import CreateDocumentContainer from 'components/DialogForm/CreateDocument/CreateDocumentContainer';
import { useGetUsersQuery } from 'store/API/userApi';
import { useGetAllProjectDropdownQuery } from 'store/API/projectApi';
import { CloseOutlined } from '@mui/icons-material';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import { CommonButton } from 'components/FormControls/Index';
import { DocumentApi } from 'store/API/documentApi';
import { useDispatch } from 'react-redux';

function ProjectDocumentsContainer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const [documentData, setDocumentData] = useState(null);
  const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
  const [isOpenCreateDocumentModal, setIsOpenCreateDocumentModal] = useState(false);
  const [usersOptionIgnoreItself, setUsersOptionIgnoreItself] = useState([]);
  const [randomParamId, setRandomParamId] = useState(getRandomValue());
  const dispatch = useDispatch();
  const [uploadDocumentData, setUploadDocumentData] = useState(null);
  const userDetail = useSelector((state) => state.userData.user);
  const { data: allDropdown } = useGetAllProjectDropdownQuery();
  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();
  
  const {
    data,
    isLoading,
    error: errorGetProjectDocumentApi
  } = useGetProjectDocumentsQuery(
    { ProjectID: params?.id, uId: randomParamId },
    { refetchOnMountOrArgChange: true }
  );
  const [deleteDocument, { isLoading: isDeletedLoading }] = useDeleteDocumentMutation();
  const [shareDocDialogInfo, setShareDocDialogInfo] = React.useState({
    type: '',
    formType: '',
    isOpen: false,
    item: '',
    Index: ''
  });
  const { data: users } = useGetUsersQuery();

  const deleteHandler = (item) => {
    setDocumentData(item);
    setIsDeleteOpenModal(true);
  };

  useEffect(() => {
    if (users) {
      if (users?.status) {
        const usersOptionIgnore = users?.data
          ?.filter((item) => item.userID !== userDetail?.localAccountId)
          .map((item) => {
            return { label: `${item.displayName} (${item.email})`, value: item.email };
          });
        setUsersOptionIgnoreItself(usersOptionIgnore);
      }
    }
  }, [users]);

  
  useEffect(() => {
    if (errorGetProjectDocumentApi) {
      if (errorGetProjectDocumentApi?.status === 400) {
        AlertMessage(errorGetProjectDocumentApi.data.message, 'error');
        navigate('/dashboard');
      }
    }
  }, [errorGetProjectDocumentApi]);

  useEffect(() => {
    if(data?.data?.result?.project?.projectID){
      let openDocument = localStorage.getItem('openDocument');
      if (openDocument) {
        localStorage.removeItem('openDocument');
        setTimeout(()=>{
          setIsOpenCreateDocumentModal(true);
        }, 200);
      }
    }
  }, [data]);


  const closeModal = () => {
    setIsDeleteOpenModal(false);
    setIsOpenCreateDocumentModal(false);
  };

  const confirmYes = async () => {
    closeModal();
    const deleteInfo = await deleteDocument(documentData?.documentID);
    ResponseHandler(deleteInfo, closeModal);
  };

  const dialogChangeHandler = (event, isOpen, formType, type, item = '') => {
    if (event) event.stopPropagation();
    setShareDocDialogInfo({
      isOpen,
      formType,
      type,
      item,
      Index: ''
    });
  };

  const createDocumentHandler = () => {
    setIsOpenCreateDocumentModal(true);
  };

  useEffect(async () => {
    let uploadDocumentID = localStorage.getItem('UploadDocumentID');
    let subject = localStorage.getItem('subject');
    if (uploadDocumentID) {
      const { data } = await dispatch(
        DocumentApi.endpoints.getDocumentById.initiate(uploadDocumentID)
      );
      localStorage.removeItem('UploadDocumentID');
      localStorage.removeItem('subject');
      dialogChangeHandler('', true, 'shareDocument-form', 'share', {
        driveItemID: uploadDocumentID,
        item: subject,
        documentActionUserID: data?.data?.documentActionUserID
      });
    }
  }, []);

  return (
    <>
      <ProjectDocuments
        tableData={data?.data?.result?.documents}
        isLoading={isLoading}
        projectData={data?.data?.result?.project}
        documentLinkClick={documentLinkClick}
        setupDocument={(fileData) => {
          setUploadDocumentData(fileData);
          createDocumentHandler();
        }}
      />
      {/* Delete Modal */}
      {isDeleteOpenModal && (
        <DialogFormContainer
          open={isDeleteOpenModal}
          dialogSize={'xs'}
          isHeader={false}
          isFooter={true}
          isConfirmFooter={true}
          footerBtnFirstLabel={t('confirm')}
          footerBtnSecondLabel={t('cancel')}
          ConfirmYes={confirmYes}
          formType="project-form"
          close={() => closeModal()}>
          <Box className="text_center">
            <ConfirmationModal
              title={t('are_you_sure_want_to_delete')}
              descriptionFirst={`${t('document_name')}: ${documentData?.name}`}
              descriptionSecond={''}
            />
          </Box>
        </DialogFormContainer>
      )}

      {/* Document Shared Modal */}
      <DialogFormContainer
        open={shareDocDialogInfo.isOpen}
        dialogSize={'sm'}
        isHeader={true}
        isFooter={false}
        footerBtnFirstLabel={t('send_for_review')}
        footerBtnSecondLabel={t('cancel')}
        headerTitle={t('send_for_review')}
        formType="shareDocument-form"
        headerClose={true}
        close={() => dialogChangeHandler()}>
        <ShareDocumentModal
          id={'shareDocument-form'}
          usersList={usersOptionIgnoreItself}
          documentData={shareDocDialogInfo.item}
          close={() => dialogChangeHandler()}
          closeWithRefresh={() => {
            setRandomParamId(getRandomValue());
            dialogChangeHandler();
          }}
        />
      </DialogFormContainer>

      {isOpenCreateDocumentModal && (
        <DialogFormContainer
          open={isOpenCreateDocumentModal}
          dialogSize={'sm'}
          isHeader={true}
          headerTitle={t('create_document')}
          footerBtnFirstLabel={t('create_document')}
          footerBtnSecondLabel={t('cancel')}
          isFooter={true}
          formType={'document-create'}
          close={() => closeModal()}>
          <CreateDocumentContainer
            selectedProjectID={data?.data?.result?.project?.projectID}
            formType={'document-create'}
            close={() => closeModal()}
            projects={allDropdown?.data}
            uploadDocumentData={uploadDocumentData}
          />
        </DialogFormContainer>
      )}

      {isAskForViewOrCreateDocumentModal && (
        <DialogFormContainer
          open={isAskForViewOrCreateDocumentModal}
          dialogSize={'xs'}
          isFooter={false}
          close={() => hideAskForViewOrCreateModal()}>
          <Box>
            <Box className="text_right">
              <CloseOutlined
                className={'pointer'}
                onClick={() => hideAskForViewOrCreateModal()}
                fontSize="small"
              />
            </Box>
            <Box className="text_center">
              <Box sx={{ mb: 2 }}>{i18n.t('copy_editing_text_message')}</Box>
              <Box className="d_flex d_flex_content_center">
                <Box sx={{ m: 1 }}>
                  <CommonButton
                    size="medium"
                    btnLabel={'Create New Version'}
                    onClick={() => documentCreateCopyLink()}
                  />
                </Box>
                <Box sx={{ m: 1 }}>
                  <CommonButton
                    size="medium"
                    btnLabel={'Open Read Only'}
                    onClick={() => documentViewEditLink()}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogFormContainer>
      )}

      {(isLoading || isDeletedLoading || isLinkClickLoading) && <Loader />}
    </>
  );
}

export default ProjectDocumentsContainer;
