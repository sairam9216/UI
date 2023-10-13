import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import useStyles from './style';
import { CustomContainer, DocMoreDetail } from 'components';
import { useTranslation } from 'react-i18next';
import { ArrowBack } from 'utils/images';
import { CloseOutlined } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
import { CommonButton } from 'components/FormControls/Index';
import { useNavigate, useLocation } from 'react-router-dom';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import { Loader, DialogFormContainer } from 'components';
import ShareDocumentInfoCard from 'components/ShareDocumentInfoCard/ShareDocumentInfoCard';
import i18n from 'i18nextInit';

const DocumentHistoryList = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [docData] = useState(location?.state?.data);
  const [activeDetail, setActiveDetail] = React.useState();
  const [isReadMore, setIsReadMore] = React.useState(false);
  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();
  const moreDetailClick = (e, detail) => {
    e?.stopPropagation();
    setIsReadMore(!isReadMore);
    setActiveDetail(detail);
  };

  return (
    <>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={classes.linkText}>
            <p className="pointer" onClick={() => navigate(-1)}>
              <img src={ArrowBack} alt="back" /> {t('back')}
            </p>
          </Box>
          <Box className={`text_center`}>
            <h1 className={classes.pageTitle}>{docData?.name}</h1>
          </Box>
        </CustomContainer>
      </Box>
      <CustomContainer>
        <Box className={classes.titleSection}>
          <h4 className={classes.sectionTitle}>{'All Agreements'}</h4>
          <Grid container spacing={2}>
            {docData?.documentHistoryModel.map((list, Index) => {
              return (
                <Grid
                  item
                  lg={2.4}
                  md={3}
                  sm={4}
                  xs={12}
                  container
                  alignItems="center"
                  className={classes.wrapUnset}
                  key={Index}>
                  <ShareDocumentInfoCard
                    historyInfo={list}
                    documentListClick={(e) => documentLinkClick(e, list)}
                    readMoreClick={(e) => moreDetailClick(e, list)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </CustomContainer>

      {/* Modal Copy or view */}
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

      {/* Read more modal  */}
      <DialogFormContainer
        open={isReadMore}
        dialogSize={'sm'}
        isFooter={false}
        isHeader={true}
        headerTitle={'Document Review Detail'}
        headerClose={true}
        close={() => setIsReadMore(false)}>
        <DocMoreDetail details={activeDetail} />
      </DialogFormContainer>
      {isLinkClickLoading && <Loader />}
    </>
  );
};

export default DocumentHistoryList;
