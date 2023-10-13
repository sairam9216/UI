/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Projects from './Project';
import { useDeleteProjectMutation } from 'store/API/projectApi';
import { useGetUsersQuery } from 'store/API/userApi';
import { DialogFormContainer, ConfirmationModal, Loader } from 'components';
import CreateProjectContainer from 'components/DialogForm/CreateProject/CreateProjectContainer';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ResponseHandler from 'utils/ResponseHandler';
import useInfiniteScroll from 'hooks/InfiniteScroll/InfiniteScroll';
import { useDebounce } from 'utils/index';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import { CommonButton } from 'components/FormControls/Index';
import { CloseOutlined } from '@mui/icons-material';
import i18n from 'i18nextInit';

const ProjectContainer = () => {
  const { t } = useTranslation();

  const [paramArg, setParamArg] = useState({ Name: '', search: '' });
  const { combinedData, readMore, refresh, isLoading, isFetching, remoteTotal } = useInfiniteScroll(
    'getInfiniteProjectList',
    paramArg
  );
  const [search, setSearch] = useState('');
  const [deleteProject, { isLoading: deleteLoading }] = useDeleteProjectMutation();
  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();
  const searchText = useDebounce(search, 1000);

  const defaultValues = {
    name: '',
    owners: [],
    counterParties1List: [],
    estimatedCompletionDate: null,
    description: ''
  };
  const [projectData, setProjectData] = useState(defaultValues);
  const { data: users } = useGetUsersQuery();
  const [createProjectDialogInfo, setCreateProjectDialogInfo] = React.useState({
    type: '',
    formType: '',
    isOpen: false,
    item: '',
    index: ''
  });

  useEffect(() => {
    setParamArg({
      ...paramArg,
      search
    });
  }, [searchText]);

  const dialogChangeHandler = (event, isOpen, formType, type, item = '', index = '') => {
    if (event) event.stopPropagation();
    if (item) {
      setProjectData({
        name: item?.name,
        projectID: item?.projectID,
        owners: item?.ownersList,
        counterParties1List: item?.counterParties1List,
        estimatedCompletionDate: item?.estimatedCompletionDate,
        description: item?.description
      });
    } else {
      setProjectData(defaultValues);
    }
    setCreateProjectDialogInfo({
      isOpen,
      formType,
      type,
      item,
      index
    });
  };

  const CloseModal = (event) => {
    dialogChangeHandler(event, false);
  };

  const ConfirmYes = async () => {
    const deleteInfo = await deleteProject(projectData?.projectID);
    if (deleteInfo?.data && deleteInfo?.data?.status) {
      setDefaultPagination();
    }
    ResponseHandler(deleteInfo, CloseModal);
  };

  const setPagination = () => {
    readMore();
  };

  const setDefaultPagination = () => {
    refresh();
  };

  return (
    <>
      <Projects
        totalCount={remoteTotal}
        setPageData={setPagination}
        allData={combinedData}
        isLoading={isLoading}
        isFetching={isFetching}
        actionClick={dialogChangeHandler}
        formType={'project-form'}
        docLinkClick={documentLinkClick}
        search={search}
        setSearch={setSearch}
      />

      {/* Create and Edit Modal */}
      {createProjectDialogInfo.isOpen && createProjectDialogInfo.type !== 'delete' && (
        <DialogFormContainer
          open={createProjectDialogInfo.isOpen}
          dialogSize={'sm'}
          isHeader={true}
          headerTitle={
            createProjectDialogInfo.type === 'edit' ? t('edit_project') : t('create_new_project')
          }
          footerBtnFirstLabel={
            createProjectDialogInfo.type === 'edit' ? t('update_project') : t('create_project')
          }
          footerBtnSecondLabel={t('cancel')}
          isFooter={true}
          formType="project-form"
          close={CloseModal}>
          <CreateProjectContainer
            initialValues={projectData}
            formType="project-form"
            type={createProjectDialogInfo.type}
            id={'project-form'}
            close={CloseModal}
            users={users?.data}
            setDefaultPagination={setDefaultPagination}
          />
        </DialogFormContainer>
      )}

      {/* Delete Modal */}
      {createProjectDialogInfo.isOpen &&
        createProjectDialogInfo.type === 'delete' &&
        deleteLoading === false && (
          <DialogFormContainer
            open={createProjectDialogInfo.isOpen}
            dialogSize={'xs'}
            isHeader={false}
            isFooter={true}
            isConfirmFooter={true}
            footerBtnFirstLabel={t('confirm')}
            footerBtnSecondLabel={t('cancel')}
            ConfirmYes={ConfirmYes}
            formType="project-form"
            close={(e) => dialogChangeHandler(e, false, '')}>
            <Box className="text_center">
              <ConfirmationModal
                title={t('are_you_sure_want_to_delete')}
                descriptionFirst={`Project Name: ${projectData?.name}`}
                descriptionSecond={''}
              />
            </Box>
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

      {(isLinkClickLoading || deleteLoading) && <Loader />}
    </>
  );
};

export default ProjectContainer;
