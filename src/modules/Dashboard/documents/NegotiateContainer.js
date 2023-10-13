import React, { useEffect, useState } from 'react';
import { BrowsFileButton } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import useStyle from '../style';
import {
  TemplateCard,
  CustomLink,
  SliderContainer,
  TemplateSkeleton,
  DialogFormContainer,
  ZoomDocumentModal,
  Loader,
  NoDataFound
} from 'components';

import { DocumentApi, useGetDocumentsQuery } from 'store/API/documentApi';
import ResponseHandler from 'utils/ResponseHandler';
import { useDispatch } from 'react-redux';

const NegotiateContainer = ({ setupDocument, docLinkClick }) => {
  const classes = useStyle();
  const [zoomdocument, setZoomdocument] = useState(false);
  const [zoomdata, setZoomData] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState();
  const [paginationData] = useState({
    IsShared: true,
    PageSize: 5,
    PageNumber: 1
  });
  const { data, isLoading, error } = useGetDocumentsQuery(paginationData);

  let negotiateSetting = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
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
  useEffect(() => {
    if (error) ResponseHandler(error?.data);
  }, [error]);

  const documentZoomClick = async (e, document) => {
    e?.stopPropagation();
    setZoomData('');
    setIsLinkClickLoading(true);
    setSelectedItem(document);

    try {
      let documentPreviewParam = {};
      documentPreviewParam.driveItemID = document?.driveItemID;
      documentPreviewParam.documentActionUserID = document?.documentActionUserID;

      const { data } = await dispatch(
        DocumentApi.endpoints.documentPreview.initiate(documentPreviewParam)
      );

      if (data?.status) {
        setZoomdocument(true);
        setZoomData(data?.data);
        setIsLinkClickLoading(false);
      }
    } catch (error) {
      setIsLinkClickLoading(false);
    }
  };

  const [isLinkClickLoading, setIsLinkClickLoading] = useState(false);
  const generateThumbClick = async (e, data) => {
    e?.stopPropagation();
    const docData = {
      documentActionUserID: data?.documentActionUserID,
      driveItemID: data?.driveItemID
    };
    try {
      setIsLinkClickLoading(true);
      const result = await dispatch(DocumentApi.endpoints.documentThumbnail.initiate(docData));
      if (result?.data?.status) {
        setIsLinkClickLoading(false);
      } else if (result?.isError) {
        ResponseHandler(result?.error?.data);
        setIsLinkClickLoading(false);
      }
    } catch (error) {
      setIsLinkClickLoading(false);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            className={`${classes.uploadWrap} ${classes.paddingRight} ${classes.borderRightSecondary}`}>
            <Box className={classes.flexBetween}>
              <h3 className={classes.uploadLabel}>{t('send_doc_for_review')}</h3>
            </Box>
            <BrowsFileButton maxLabel={' '} setupDocument={setupDocument} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} container className={classes.templateMain}>
          <Grid item xs={12} sm={12} className={classes.flexBetween}>
            <h3 className={classes.uploadLabel}>{t('document_need_to_review')}</h3>
            {data?.data?.result?.length > 0 && (
              <CustomLink to="/documents/negotiation" text={t('view_all')} />
            )}
          </Grid>
          {/* Template slider */}
          <Box className={`relative ${classes.templateWrap}`}>
            {data?.data?.result?.length ? (
              <SliderContainer settings={negotiateSetting}>
                {data?.data?.result?.map((template, Index) => {
                  return (
                    <Box key={Index} className={classes.templateCardWrap}>
                      <TemplateCard
                        isEmpty={template?.isGenerateThumbnail}
                        templateTitle={template?.name}
                        image={template?.thumbnail}
                        zoomClick={(e) => documentZoomClick(e, template)}
                        isEdit
                        cardClick={(e) => docLinkClick(e, template)}
                        generateThumbClick={(e) => generateThumbClick(e, template)}
                      />
                    </Box>
                  );
                })}
              </SliderContainer>
            ) : (
              <>
                {isLoading ? (
                  <>
                    <SliderContainer settings={negotiateSetting}>
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
      {/* Zoom Templates */}
      <DialogFormContainer
        open={zoomdocument}
        dialogSize={'sm'}
        isFooter={false}
        customSize
        close={() => setZoomdocument(false)}>
        <ZoomDocumentModal
          thumbnail={zoomdata}
          close={() => setZoomdocument(false)}
          documentName={selectedItem?.name}
          isEdit
          editClick={(e) => docLinkClick(e, selectedItem)}
        />
      </DialogFormContainer>
      {isLinkClickLoading && <Loader />}
    </>
  );
};
NegotiateContainer.propTypes = {
  templates: PropTypes.array,
  setupDocument: PropTypes.any,
  docLinkClick: PropTypes.func
};
export default NegotiateContainer;
