import React, { useEffect, useState } from 'react';
import { BrowsFileButton } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useGetDocumentsQuery, DocumentApi } from 'store/API/documentApi';
import { useDispatch } from 'react-redux';
import { CopyDocumentContainer } from 'components/DialogForm';
import { Grid, Box } from '@mui/material';
import useStyle from '../style';
import {
  CustomLink,
  SliderContainer,
  TemplateSkeleton,
  NoDataFound,
  DialogFormContainer,
  ZoomDocumentModal,
  Loader
} from 'components';
import ResponseHandler from 'utils/ResponseHandler';
import TemplatesSlider from './TemplatesSlider';
import { getSharePointUrl } from 'utils';
import AlertMessage from 'utils/AlertMessage';

const DraftContainer = ({ setupDocument }) => {
  const classes = useStyle();
  const copy_form = 'template-copy-form';
  const [zoomDocument, setZoomDocument] = useState(false);
  const [zoomData, setZoomData] = useState('');
  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [paginationData] = useState({
    IsShared: false,
    PageSize: 5,
    PageNumber: 1
  });
  const [previewLoading, setPreviewLoading] = useState(false);
  const { data, isLoading, error } = useGetDocumentsQuery(paginationData);

  let TemplateSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  };

  let SkelatonSettings = {
    ...TemplateSettings,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };
  const [createProjectDialogInfo, setCreateProjectDialogInfo] = React.useState({
    type: '',
    isOpen: false,
    id: ''
  });
  useEffect(() => {
    if (error) ResponseHandler(error?.data);
  }, [error]);

  const documentZoomClick = async (e, document) => {
    e?.stopPropagation();
    setZoomData('');
    setPreviewLoading(true);
    setSelectedItem(document);
    try {
      let documentPreviewParam = {};
      documentPreviewParam.driveItemID = document?.driveItemID;
      documentPreviewParam.documentActionUserID = document?.documentActionUserID;

      const { data: docData, error } = await dispatch(
        DocumentApi.endpoints.documentPreview.initiate(documentPreviewParam)
      );
      if (docData?.status) {
        setZoomDocument(true);
        setZoomData(docData?.data);
        setPreviewLoading(false);
      } else {
        setPreviewLoading(false);
        if (error?.data?.message) {
          AlertMessage(error?.data?.message, 'error');
        }
      }
    } catch (error) {
      setPreviewLoading(false);
    }
  };
  const [isLinkClickLoading, setIsLinkClickLoading] = useState(false);

  const cardClick = async (e, doc) => {
    e?.stopPropagation();
    try {
      const docData = { Id: doc?.driveItemID, documentActionUserID: doc?.documentActionUserID };
      setIsLinkClickLoading(true);
      const result = await dispatch(DocumentApi.endpoints.getDocumentEditLink.initiate(docData));
      if (result?.data?.status && result?.data?.data) {
        setIsLinkClickLoading(false);
        const url = getSharePointUrl(result?.data?.data);
        window.location.href = url;
      } else if (result?.isError) {
        ResponseHandler(result?.error?.data);
        setIsLinkClickLoading(false);
      }
    } catch (error) {
      setIsLinkClickLoading(false);
    }
  };

  const dialogChangeHandler = (e, isOpen, type, id = '') => {
    if (e) e?.stopPropagation();
    setCreateProjectDialogInfo({
      isOpen,
      type,
      id
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            className={`${classes.uploadWrap} ${classes.paddingRight} ${classes.borderRightPrimary}`}>
            <Box className={classes.flexBetween}>
              <h3 className={classes.uploadLabel}>{t('upload_document')}</h3>
            </Box>
            <BrowsFileButton maxLabel={' '} setupDocument={setupDocument} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} container className={classes.templateMain}>
          <Grid item xs={12} sm={12} className={classes.flexBetween}>
            <Box className={`d_flex d_flex_align`}>
              <h3 className={classes.uploadLabel}>{t('use_template')}</h3>
            </Box>
            {data?.data?.result?.length > 0 && (
              <CustomLink to="/documents/draft" text={t('view_all')} />
            )}
          </Grid>
          <Box className={`relative ${classes.templateWrap}`}>
            {data?.data?.result?.length ? (
              <TemplatesSlider
                data={data?.data?.result}
                zoomIconClick={documentZoomClick}
                copyIconClick={dialogChangeHandler}
                TemplateSettings={TemplateSettings}
                copy_form={copy_form}
                documentCardClick={cardClick}
              />
            ) : (
              <>
                {isLoading ? (
                  <>
                    <SliderContainer settings={SkelatonSettings}>
                      <TemplateSkeleton variant="rectangular" />
                      <TemplateSkeleton variant="rectangular" />
                      <TemplateSkeleton variant="rectangular" />
                      <TemplateSkeleton variant="rectangular" />
                      <TemplateSkeleton variant="rectangular" />
                    </SliderContainer>
                  </>
                ) : (
                  <NoDataFound />
                )}
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <DialogFormContainer
        open={zoomDocument}
        dialogSize={'sm'}
        isFooter={false}
        customSize
        close={() => setZoomDocument(false)}>
        <ZoomDocumentModal
          thumbnail={zoomData}
          isCopy
          close={() => setZoomDocument(false)}
          copyClick={(e) => dialogChangeHandler(e, true, copy_form, selectedItem)}
          documentName={selectedItem?.name}
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

      {(previewLoading || isLinkClickLoading) && <Loader />}
    </>
  );
};
DraftContainer.propTypes = {
  setupDocument: PropTypes.any
};
export default DraftContainer;
