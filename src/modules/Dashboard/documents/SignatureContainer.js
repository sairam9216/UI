/* eslint-disable */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import useStyle from '../style';
import { SignCard, CustomLink, SliderContainer, NoDataFound, TemplateSkeleton } from 'components';
import {  useGetSignedDocumentListQuery } from 'store/API/documentApi';
import { getRandomValue } from 'utils';
import ResponseHandler from 'utils/ResponseHandler';
import { useNavigate } from 'react-router-dom';
import AlertMessage from 'utils/AlertMessage';

const uid = getRandomValue();

const SignatureContainer = ({ templates }) => {
  const classes = useStyle();
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetSignedDocumentListQuery({ uid: uid, PageSize: 100, PageNumber: 1 },     { refetchOnMountOrArgChange: true }
    );
  const navigate = useNavigate();
  let TemplateSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 640,
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} container className={classes.templateMain}>
        <Grid item xs={12} sm={12} className={classes.flexBetween}>
          <h3 className={classes.uploadLabel}>{t('select_existing_doc_signature')}</h3>
          {/* {templates?.length > 0 && <CustomLink to="" text={t('view_all')} />} */}
        </Grid>
        {/* Template slider */}
        <Box className={`${classes.templateWrap}`}>
          {data?.data?.result?.length ? (
            <SliderContainer settings={TemplateSettings} slideArray={templates} customClass={classes.slickCustomSignature}>
              {data?.data?.result?.map((template, Index) => {
                return (
                  <Box key={Index} className={classes.templateCardWrap} onClick={()=>{
                    if(!template.combinedPDFDriveItemID){
                      AlertMessage('Oops !! no one has signed.', 'error');
                    }else{
                      navigate('/sign-pdf/'+template.documentActionUserSignatureDraftID);
                    }
                  }}>
                    <SignCard templateData={template} />
                  </Box>
                );
              })}
            </SliderContainer>
          ) : (
            <>
              {isLoading ? (
                <>
                  <SliderContainer settings={TemplateSettings}>
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
  );
};
SignatureContainer.propTypes = {
  templates: PropTypes.array,
  setupDocument: PropTypes.any
};
export default SignatureContainer;
