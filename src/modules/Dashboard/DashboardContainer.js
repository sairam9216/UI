import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { DialogFormContainer, Loader } from 'components';
import CreateProjectContainer from 'components/DialogForm/CreateProject/CreateProjectContainer';
import CreateDocumentContainer from 'components/DialogForm/CreateDocument/CreateDocumentContainer';
import { useGetAllProjectQuery, useGetAllProjectDropdownQuery } from 'store/API/projectApi';
import { useGetUsersQuery } from 'store/API/userApi';
import { useTranslation } from 'react-i18next';
import ResponseHandler from 'utils/ResponseHandler';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AlertMessage from 'utils/AlertMessage';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import { CommonButton } from 'components/FormControls/Index';
import { CloseOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import i18n from 'i18nextInit';

const DashboardContainer = () => {
  const PAGE = 1;
  const LIMIT = 10;
  const [pageData] = useState({
    limit: LIMIT,
    pagNum: PAGE
  });
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAllProjectQuery(pageData);
  const { data: allDropdown } = useGetAllProjectDropdownQuery();
  const { data: users } = useGetUsersQuery();
  const [uploadDocumentData, setUploadDocumentData] = useState(null);
  const [searchParams] = useSearchParams();
  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();

  const { t } = useTranslation();
  const [createProjectDialogInfo, setCreateProjectDialogInfo] = React.useState({
    type: '',
    isOpen: false,
    id: ''
  });
  useEffect(() => {
    if (error) ResponseHandler(error?.data);
  }, [error]);

  useEffect(() => {
    let referralUrl = localStorage.getItem('referralUrl');
    if (referralUrl) {
      localStorage.removeItem('referralUrl');
      window.location.href = referralUrl;
    }
  }, []);

  useEffect(() => {
    if (searchParams.get('state') && searchParams.get('event') !== 'decline') {
      AlertMessage('Your document has been sign successfully.', 'success');
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/dashboard', { replace: true });
    }
  }, []);

  const defaultValues = {
    name: '',
    owners: [],
    counterParties1List: [],
    description: '',
    estimatedCompletionDate: null,
    projectId: ''
  };
  const [projectData] = useState(defaultValues);
  const dialogChangeHandler = (isOpen, formType, type, id = '') => {
    setCreateProjectDialogInfo({
      isOpen,
      formType,
      type,
      id
    });
  };
  // Doc Link Click
  return (
    <>
      <Dashboard
        projectRows={data?.data?.result}
        setupDocument={(fileData) => {
          setUploadDocumentData(fileData);
          dialogChangeHandler(true, 'document-project', 'create');
        }}
        isPagination={false}
        showViewAll={true}
        isLoading={isLoading}
        projectFormType={'project-form'}
        createProject={dialogChangeHandler}
        docLinkClick={documentLinkClick}
        setupNegotiation={(fileData) => {
          setUploadDocumentData(fileData);
          dialogChangeHandler(true, 'negotiation-project', 'create');
        }}
      />
      {/* Create Project Modal Form */}
      {createProjectDialogInfo.isOpen && createProjectDialogInfo.formType === 'project-form' && (
        <DialogFormContainer
          open={createProjectDialogInfo.isOpen}
          dialogSize={'sm'}
          isHeader={true}
          headerTitle={t('new_project')}
          footerBtnFirstLabel={t('create_project')}
          footerBtnSecondLabel={t('cancel')}
          isFooter={true}
          close={() => dialogChangeHandler(false)}
          formType={createProjectDialogInfo.formType}>
          <CreateProjectContainer
            initialValues={projectData}
            type={createProjectDialogInfo.type}
            id={createProjectDialogInfo.id}
            close={() => dialogChangeHandler(false)}
            formType={createProjectDialogInfo?.formType}
            users={users?.data}
          />
        </DialogFormContainer>
      )}

      {/* Create Document Modal Form */}
      {createProjectDialogInfo.isOpen &&
        (createProjectDialogInfo.formType === 'document-project' ||
          createProjectDialogInfo.formType === 'negotiation-project') && (
          <DialogFormContainer
            open={createProjectDialogInfo.isOpen}
            dialogSize={'sm'}
            isHeader={true}
            headerTitle={t('new_document')}
            footerBtnFirstLabel={t('create_document')}
            footerBtnSecondLabel={t('cancel')}
            isFooter={true}
            close={() => dialogChangeHandler(false)}
            formType={createProjectDialogInfo.formType}>
            <CreateDocumentContainer
              projects={allDropdown?.data}
              formType={createProjectDialogInfo.formType}
              uploadDocumentData={uploadDocumentData}
              close={() => dialogChangeHandler(false)}
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
      {isLinkClickLoading && <Loader />}
    </>
  );
};

export default DashboardContainer;
