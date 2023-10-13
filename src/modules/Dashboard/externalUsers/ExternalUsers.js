import React, { useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import { DashboardDocTypeCard, NoDataFound, SliderContainer } from 'components';
import { BrowsFileButton } from 'components/FormControls/Index';
import { DraftIcon, NegotiateIcon, signIcon } from 'utils/images';
import useStyle from '../style';
import { useTranslation } from 'react-i18next';

const ExternalUsers = () => {
  const sliderRef = useRef();
  const { t } = useTranslation();
  const [activeDoc, setActiveDocs] = React.useState(2);
  const [extCards] = React.useState(['', '', '', '', '', '']);
  const classes = useStyle();
  let docSetting = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
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
  const documents = [
    {
      title: 'Draft',
      subtitle: 'Step one',
      docIcon: DraftIcon
    },
    {
      title: 'Negotiate',
      subtitle: 'Step two',
      docIcon: NegotiateIcon
    },
    {
      title: 'Sign',
      subtitle: 'Step three',
      docIcon: signIcon,
      isActive: true,
      index: 2
    }
  ];

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

  const changeDocument = (index) => {
    setActiveDocs(index);
    sliderRef?.current?.slickGoTo(2);
  };

  const ExternalContainer = () => {
    return (
      <Box>
        <Box
          className={`d_flex d_flex_content_center d_flex_align ${classes.extTempCardEmpty}`}
          borderRadius={2}>
          <NoDataFound />
        </Box>
      </Box>
    );
  };

  const ExternalTemplateCard = () => {
    return (
      <Box sx={{ px: 1 }}>
        <Box
          className={`d_flex d_flex_content_center d_flex_align ${classes.extTempCard}`}
          borderRadius={2}></Box>
      </Box>
    );
  };

  useEffect(() => {
    sliderRef?.current?.slickGoTo(2);
  }, []);

  return (
    <>
      <Box className={classes.docSliderWrap}>
        <SliderContainer settings={docSetting} slideArray={documents} sliderRef={sliderRef}>
          {documents?.map((doc, Index) => {
            return (
              <Box
                key={Index}
                className={`${doc.isActive ? 'slideBox_' + Index : 'slideBox'}  ${
                  classes.docsliderBox
                }`}
                onClick={() => changeDocument(Index)}>
                <DashboardDocTypeCard
                  title={doc?.title}
                  subtitle={doc?.subtitle}
                  docIcon={doc?.docIcon}
                  className={classes.extCard}
                />
              </Box>
            );
          })}
        </SliderContainer>
      </Box>
      {activeDoc === 2 ? (
        <>
          <Grid container className={classes.extDocSection}>
            <Grid item xs={12} sm={4}>
              <Box
                className={`pointerNone ${classes.uploadWrap} ${classes.paddingRight} ${classes.borderRightPrimary}`}>
                <Box className={classes.flexBetween}>
                  <h3 className={classes.uploadLabel}>{t('upload_document')}</h3>
                </Box>
                <BrowsFileButton maxLabel={' '} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} container className={classes.templateMain}>
              <Grid item xs={12} sm={12} className={classes.flexBetween}>
                <Box className={` d_flex d_flex_align`}>
                  <h3 className={classes.uploadLabel}>{t('use_template')}</h3>
                </Box>
              </Grid>
              {/* Template slider */}
              <Box className={`relative ${classes.templateWrap}`}>
                <SliderContainer settings={TemplateSettings}>
                  {extCards?.map((template, Index) => {
                    return (
                      <Box key={Index} className={classes.templateCardWrap}>
                        <ExternalTemplateCard key={Index} />
                      </Box>
                    );
                  })}
                </SliderContainer>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <ExternalContainer />
      )}
    </>
  );
};

export default ExternalUsers;
