/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import useStyle from './style';
import ProjectDocumentTop from './ProjectDocumentTop/ProjectDocumentTop';
import { BrowsFileButton, CommonButton } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import {
  Loader,
  DialogFormContainer,
  ZoomDocumentModal,
  CustomContainer,
  ProjectDocumentCard,
  SliderContainer,
  DocMoreDetail,
  DocumentEmail
} from 'components';
import { CloseOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import i18n from 'i18nextInit';
import ProjectDocumentsNegotiationHistory from './ProjectDocumentsNegotiationHistory';
import UploadIcon from 'assets/images/upload_icon';
import SelectedProjectDocumentIcon from 'assets/images/selected_project_documet';
import ExistingDocumentIcon from 'assets/images/existing_document_icon';

const ProjectDocuments = ({ isLoading, tableData, projectData, setupDocument }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyle();
  const [isEmailModal, setisEmailModal] = useState(false);
  const [documentActive, setDocumentActive] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();
  let docSetting = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  if (isLoading === true || !projectData) {
    return null;
  }

  const getDocLists = (e, Index) => {
    setDocumentActive(Index);
  };

  const navigateToViewAll = (data) => {
    navigate(`/document-info`, { state: { data } });
  };

  const openMail = (data) => {
    setActiveDetail(data);
    setisEmailModal(true);
  };

  return (
    <>
      <Box className={classes.mainProductContainer}>
        <Box className={classes.themeBackground}>
          <Box className={classes.projectDetail}>
            <ProjectDocumentTop projectData={projectData} />
          </Box>
          <CustomContainer>
            <Box>
              <Box className={classes.documentSection}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} lg={2.5} xl={2.4}>
                    <Box className={classes.addDocumentContainer}>
                      <Box className={classes.iconWithTitle} sx={{ mb: 1 }}>
                        <UploadIcon />
                        <p>Add Document</p>
                      </Box>
                      <Box className={classes.browseBoxContainer}>
                        <BrowsFileButton
                          maxLabel={' '}
                          setupDocument={setupDocument}
                          customClass="documentBrowse"
                        />
                      </Box>
                    </Box>
                  </Grid>
                  {tableData.length > 0 && (
                    <>
                      <Grid item xs={12} sm={6} lg={2.5} xl={2.4}>
                        <Box className={classes.selectedBoxContainer}>
                          <Box component={'div'}>
                            <Box className={classes.iconWithTitle} sx={{ ml: 2 }}>
                              <SelectedProjectDocumentIcon />
                              <p>Selected</p>
                            </Box>
                            <Box className="relative">
                              <ProjectDocumentCard docInfo={tableData[documentActive]} />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={7} xl={7.2}>
                        <Box className={classes.existingContainer}>
                          <Box className={classes.iconWithTitle} sx={{ ml: 1.2 }}>
                            <ExistingDocumentIcon />
                            <p>Existing Project Documents</p>
                          </Box>
                          <Box>
                            <SliderContainer
                              settings={docSetting}
                              customClass={classes.slickCustom}>
                              {tableData?.map((document, Index) => {
                                return (
                                  <Box className="relative" key={Index}>
                                    <ProjectDocumentCard
                                      docInfo={document}
                                      docLinkClick={getDocLists}
                                      activeIndex={Index}
                                    />
                                  </Box>
                                );
                              })}
                            </SliderContainer>
                          </Box>
                        </Box>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Box>
            </Box>
          </CustomContainer>
        </Box>
        {tableData[documentActive]?.documentHistoryModel?.length ? (
          <Box sx={{ borderTop: '1px solid #007CFF' }}>
            <ProjectDocumentsNegotiationHistory
              documentLinkClick={documentLinkClick}
              openMail={openMail}
              documentName={tableData[documentActive]?.name}
              itemList={tableData[documentActive]?.documentHistoryModel}
            />
          </Box>
        ) : (
          ''
        )}
      </Box>
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

      {/* Email Modal */}
      <DialogFormContainer
        open={isEmailModal}
        dialogSize={'sm'}
        isFooter={false}
        isHeader={false}
        headerClose={true}>
        <DocumentEmail
          documentLinkClick={documentLinkClick}
          itemInfo={activeDetail}
          closeModal={() => {
            setisEmailModal(false);
            setActiveDetail(null);
          }}
        />
      </DialogFormContainer>

      {isLinkClickLoading && <Loader />}
    </>
  );
};

ProjectDocuments.propTypes = {
  isLoading: PropTypes.bool,
  tableData: PropTypes.array,
  tableColumn: PropTypes.array,
  projectData: PropTypes.object,
  setupDocument: PropTypes.any
};

export default ProjectDocuments;
