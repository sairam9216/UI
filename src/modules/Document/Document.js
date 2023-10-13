import React, { useState } from 'react';
import { Box, CircularProgress, Grid, InputAdornment } from '@mui/material';
import {
  CustomContainer,
  DocumentCard,
  DocumentList,
  Loader,
  DialogFormContainer,
  ZoomDocumentModal,
  NoDataFound
} from 'components';
import { CopyDocumentContainer } from 'components/DialogForm';
import { useTranslation } from 'react-i18next';
import useStyles from './style';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Search } from '@mui/icons-material';
import { InputField } from 'components/FormControls/Index';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DocumentApi } from 'store/API/documentApi';
import { useDispatch } from 'react-redux';
import ResponseHandler from 'utils/ResponseHandler';
import { Link } from 'react-router-dom';
import { ArrowBack } from 'utils/images';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import { CommonButton } from 'components/FormControls/Index';
import { CloseOutlined } from '@mui/icons-material';
import i18n from 'i18nextInit';
function Document({
  isLoading,
  totalCount,
  setPageData,
  allData,
  isFetching,
  search,
  setSearch,
  IsShared
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [docView, setDocView] = useState({
    list: false,
    grid: true
  });
  const copy_form = 'template-copy-form';
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState();
  const [zoomDocument, setZoomDocument] = useState(false);
  const [zoomData, setZoomData] = useState('');
  const [previewLoading, setPreviewLoading] = useState(false);

  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();

  const documentZoomClick = async (e, document) => {
    e?.stopPropagation();
    setZoomData('');
    setPreviewLoading(true);
    setSelectedItem(document);
    try {
      let documentPreviewParam = {};
      documentPreviewParam.driveItemID = document?.driveItemID;
      documentPreviewParam.documentActionUserID = document?.documentActionUserID;

      const { data } = await dispatch(
        DocumentApi.endpoints.documentPreview.initiate(documentPreviewParam)
      );
      if (data?.status) {
        setZoomDocument(true);
        setZoomData(data?.data);
        setPreviewLoading(false);
      }
    } catch (error) {
      setPreviewLoading(false);
      setIsThumbLinkClickLoading(false);
    }
  };
  const [createProjectDialogInfo, setCreateProjectDialogInfo] = React.useState({
    type: '',
    isOpen: false,
    id: ''
  });
  const initialValues = {
    search
  };
  const dialogChangeHandler = (e, isOpen, type, id = '') => {
    if (e) e?.stopPropagation();
    setCreateProjectDialogInfo({
      isOpen,
      type,
      id
    });
  };
  const [isThubmLinkClickLoading, setIsThumbLinkClickLoading] = useState(false);

  const generateThumbClick = async (e, data) => {
    e?.stopPropagation();
    const docData = {
      documentActionUserID: data?.documentActionUserID,
      driveItemID: data?.driveItemID
    };
    try {
      setIsThumbLinkClickLoading(true);
      const result = await dispatch(DocumentApi.endpoints.documentThumbnail.initiate(docData));
      if (result?.data?.status) {
        setIsThumbLinkClickLoading(false);
      } else if (result?.isError) {
        ResponseHandler(result?.error?.data);
        setIsThumbLinkClickLoading(false);
      }
    } catch (error) {
      setIsThumbLinkClickLoading(false);
    }
  };

  return (
    <div>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={classes.linkText}>
            <Link to="/dashboard">
              <img src={ArrowBack} alt="back" /> {t('back')}
            </Link>
          </Box>
          <Box className={`text_center`}>
            <h1 className={classes.pageTitle}>
              {IsShared ? t('document_review') : t('use_template')}
            </h1>
          </Box>
        </CustomContainer>
      </Box>
      <CustomContainer>
        <Box className={classes.titleSection}>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h4 className={classes.sectionTitle}>{t('all_documents')}</h4>
            </Grid>
            <Grid
              item
              lg={3}
              md={4}
              sm={12}
              xs={12}
              container
              alignItems="center"
              className={classes.wrapUnset}>
              <Box>
                <Formik initialValues={initialValues}>
                  {() => (
                    <Form id="search-form">
                      <InputField
                        name="search"
                        type="search"
                        fullWidth
                        value={search}
                        placeholder={t('search_document')}
                        variant="outlined"
                        onChange={(e) => setSearch(e?.target?.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Search fontSize="small" />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Form>
                  )}
                </Formik>
              </Box>
              <Box className="d_flex">
                <span
                  className={`d_flex pointer ${classes.viewIcon} ${
                    docView.list ? classes.activeItem : ''
                  } `}
                  onClick={() =>
                    setDocView({
                      list: true,
                      grid: false
                    })
                  }>
                  <FormatListBulletedIcon />
                </span>
                <span
                  className={`d_flex pointer ${classes.viewIcon} ${
                    docView.grid ? classes.activeItem : ''
                  }`}
                  onClick={() =>
                    setDocView({
                      list: false,
                      grid: true
                    })
                  }>
                  <GridViewIcon />
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <InfiniteScroll
              dataLength={allData.length}
              next={setPageData}
              hasMore={allData.length > 0 && totalCount !== allData.length ? true : false}
              loader={
                isFetching ? (
                  <Box sx={{ mt: 2 }} className={'d_flex d_flex_content_center'}>
                    <CircularProgress />
                  </Box>
                ) : null
              }
              className={classes.projectContent}>
              {/* Grid View */}
              <Box>
                <Grid container spacing={2}>
                  {allData.length > 0 ? (
                    allData?.map((document, Index) => {
                      return (
                        <>
                          {docView.grid && (
                            <Grid item lg={2.4} md={3} sm={4} xs={12} key={Index}>
                              <DocumentCard
                                image={document?.thumbnail}
                                title={document?.name}
                                isEmptyThumb={document?.isGenerateThumbnail}
                                subTitle={document?.owner}
                                zoomClick={(e) => documentZoomClick(e, document)}
                                isCopyEdit={IsShared}
                                copyClick={(e) => dialogChangeHandler(e, true, copy_form, document)}
                                editClick={(e) => documentLinkClick(e, document)}
                                generateThumbClick={(e) => generateThumbClick(e, document)}
                              />
                            </Grid>
                          )}
                        </>
                      );
                    })
                  ) : (
                    <Grid item xs={12}></Grid>
                  )}
                </Grid>
              </Box>
              {/* List View */}
              <Box className={docView.list ? classes.docListViewWrap : ''}>
                {allData.length > 0
                  ? allData?.map((document, Index) => {
                      if (docView.list)
                        return (
                          <Grid
                            container
                            key={Index}
                            className={classes.listBorderBottom}
                            alignItems="center">
                            <DocumentList
                              document={document}
                              zoomClick={(e) => documentZoomClick(e, document)}
                              isCopyEdit={IsShared}
                              copyClick={(e) => dialogChangeHandler(e, true, copy_form, document)}
                              editClick={(e) => documentLinkClick(e, document)}
                              generateThumbClick={(e) => generateThumbClick(e, document)}
                            />
                          </Grid>
                        );
                    })
                  : ''}
              </Box>
            </InfiniteScroll>
          )}
          {allData.length === 0 && !isFetching && <NoDataFound />}
        </Box>
      </CustomContainer>
      <DialogFormContainer
        open={zoomDocument}
        dialogSize={'sm'}
        isFooter={false}
        customSize
        close={() => setZoomDocument(false)}>
        <ZoomDocumentModal
          thumbnail={zoomData}
          close={() => setZoomDocument(false)}
          isCopy={!IsShared}
          isEdit={IsShared}
          copyClick={(e) => dialogChangeHandler(e, true, copy_form, selectedItem)}
          documentName={selectedItem?.name}
          editClick={(e) => documentLinkClick(e, selectedItem)}
        />
      </DialogFormContainer>
      <DialogFormContainer
        open={createProjectDialogInfo?.isOpen}
        dialogSize={'sm'}
        isHeader={true}
        headerTitle={t('copy_document')}
        footerBtnFirstLabel={t('copy_btn')}
        footerBtnSecondLabel={t('cancel')}
        isFooter={true}
        close={() => dialogChangeHandler(false)}
        formType={copy_form}>
        <CopyDocumentContainer formType={copy_form} projectInfo={createProjectDialogInfo?.id} />
      </DialogFormContainer>
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
      {(isThubmLinkClickLoading || previewLoading || isLinkClickLoading) && <Loader />}
    </div>
  );
}
Document.propTypes = {
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  IsShared: PropTypes.bool,
  totalCount: PropTypes.number,
  setPageData: PropTypes.func,
  setSearch: PropTypes.func,
  pageData: PropTypes.any,
  allData: PropTypes.array,
  search: PropTypes.string
};
export default Document;
