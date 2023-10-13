/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import {
  CustomContainer,
  ProjectCard,
  MemberChip,
  DialogFormContainer,
  ConfirmationModal
} from 'components';
import CreateProjectContainer from 'components/DialogForm/CreateProject/CreateProjectContainer';
import { useGetUsersQuery } from 'store/API/userApi';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowBack } from 'utils/images';
import useStyles from './../style';
import { useTranslation } from 'react-i18next';
import { useDeleteProjectMutation } from 'store/API/projectApi';
import ResponseHandler from 'utils/ResponseHandler';

const ProjectDocumentTop = ({ projectData, docLinkClick }) => {
  const classes = useStyles();
  const { name, description } = projectData;
  const { t } = useTranslation();
  const { data: users } = useGetUsersQuery();
  const [deleteProject] = useDeleteProjectMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const [createProjectDialogInfo, setCreateProjectDialogInfo] = React.useState({
    type: '',
    formType: '',
    isOpen: false,
    item: ''
  });

  const defaultValues = {
    name: '',
    owner: '',
    counterParties1List: [],
    counterParties2List: [],
    estimatedCompletionDate: null,
    description: '',
    source: 'UI'
  };
  const [project, setProjectData] = useState();

  const projectDialogChangeHandler = (event, isOpen, formType, type, item = '') => {
    if (event) event.stopPropagation();
    if (item) {
      setProjectData({
        name: item?.name,
        projectId: item?.projectID,
        owners: item?.ownersList,
        counterParties1List: item?.counterParties1List,
        counterParties2List: item?.counterParties2List,
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
      item
    });
  };

  const CloseModal = () => {
    setCreateProjectDialogInfo({ isOpen: false });
  };

  const confirmYes = async () => {
    CloseModal();
    const deleteInfo = await deleteProject(project?.projectId);
    ResponseHandler(deleteInfo, CloseModal);
    if (deleteInfo?.data?.status) navigate('/projects', { replace: true });
  };
  const backFile = () => {
    navigate(`/${location?.state ? location?.state : 'dashboard'}`);
  };

  return (
    <>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={classes.projectHeader}>
            <Grid container spacing={2} className={classes.topFlexItem}>
              <Grid item lg={2.5} md={3} sm={5} xs={12}>
                <Box className={classes.topCard}>
                  <ProjectCard
                    project={projectData}
                    docLinkClick={docLinkClick}
                    isEditable={projectData?.isReviewer ? false : true}
                    actionClick={projectDialogChangeHandler}
                    notShowDoc={true}
                  />
                </Box>
              </Grid>
              <Grid item lg={9.5} md={9} sm={7} xs={12}>
                <Box className={classes.linkText}>
                  <p onClick={() => backFile()} className={'pointer'}>
                    <img src={ArrowBack} alt="back" /> {t('back')}
                  </p>
                </Box>
                <Box className={classes.infoTop}>
                  <p className={classes.pageTitle}>{name}</p>
                  <Box className={`d_flex d_flex_align_start ${classes.flexWrap}`}>
                    <p className={classes.pageDescription}>{description}</p>
                    {/* <CommonButton size="small" className={'btnSecondary'} btnLabel="Project History" /> */}
                  </Box>
                </Box>
                <Box className={classes.labelSection}>
                  {/* <Box className={`d_flex  ${classes.projectLabelRow}`}>
                <label className={classes.label}>{t('project_owners')} :</label>
                <Box className={`d_flex d_flex_wrap d_flex_align`}>
                  <h4 className={classes.valueLabel}>{ownerName}</h4>
                 </Box>
              </Box> */}
                  {projectData?.ownersFullDetails?.length > 0 ? (
                    <Box className={`d_flex ${classes.projectLabelRow}`}>
                      <label className={classes.label}>{t('project_owners')} :</label>
                      <Box className={classes.addMember}>
                        {projectData?.ownersFullDetails?.map((member, Index) => {
                          return <MemberChip member={member} key={Index} />;
                        })}
                      </Box>
                    </Box>
                  ) : (
                    <Box style={{ height: 50 }}></Box>
                  )}
                  {projectData?.members.length > 0 ? (
                    <Box className={`d_flex ${classes.projectLabelRow}`}>
                      <label className={classes.label}>{t('members')}:</label>
                      <Box className={classes.addMember}>
                        {projectData?.members?.map((member, Index) => {
                          return <MemberChip member={member} key={Index} />;
                        })}
                      </Box>
                    </Box>
                  ) : (
                    <Box style={{ height: 50 }}></Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CustomContainer>
      </Box>
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
            initialValues={project}
            formType="project-form"
            type={createProjectDialogInfo.type}
            id={'project-form'}
            close={CloseModal}
            users={users?.data}
          />
        </DialogFormContainer>
      )}

      {/* Delete Project Modal */}
      {createProjectDialogInfo.isOpen && createProjectDialogInfo.type === 'delete' && (
        <DialogFormContainer
          open={createProjectDialogInfo.isOpen}
          dialogSize={'xs'}
          isHeader={false}
          isFooter={true}
          isConfirmFooter={true}
          footerBtnFirstLabel={t('confirm')}
          footerBtnSecondLabel={t('cancel')}
          ConfirmYes={confirmYes}
          formType="project-form"
          close={(e) => projectDialogChangeHandler(e, false, '')}>
          <Box className="text_center">
            <ConfirmationModal
              title={t('are_you_sure_want_to_delete')}
              descriptionFirst={`Project Name: ${project?.name}`}
              descriptionSecond={''}
            />
          </Box>
        </DialogFormContainer>
      )}
    </>
  );
};

ProjectDocumentTop.propTypes = {
  projectData: PropTypes.object,
  docLinkClick: PropTypes.func
};
export default ProjectDocumentTop;
