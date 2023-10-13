import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  CustomContainer,
  DashboardDocTypeCard,
  CustomLink,
  ProjectCard,
  SliderContainer,
  EmptyCard,
  Loader
} from 'components';
import useStyle from './style';
import { useTranslation } from 'react-i18next';
import DraftContainer from './documents/DraftContainer';
import NegotiateContainer from './documents/NegotiateContainer';
import SignatureContainer from './documents/SignatureContainer';
import { DraftIcon, NegotiateIcon, signIcon } from 'utils/images';
import Grid from '@mui/material/Grid';

const Dashboard = ({
  isLoading,
  projectRows,
  setupDocument,
  setupNegotiation,
  projectFormType,
  createProject,
  docLinkClick
}) => {
  const classes = useStyle();
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [activeDoc, setActiveDocs] = React.useState(0);
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
    ],
    beforeChange: (oldIndex, newIndex) => {
      setActiveDocs(newIndex);
    }
  };

  let settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const documents = [
    {
      title: t('draft'),
      docIcon: DraftIcon
    },
    {
      title: t('negotiate'),
      docIcon: NegotiateIcon
    },
    {
      title: t('sign'),
      docIcon: signIcon
    }
  ];

  const templates = [
    {
      projectName: 'Project Mars 1',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['pratik', 'Vijay', 'bipul', 'vishal', 'dhaval', 'aditya']
    },
    {
      projectName: 'Project Mars 2',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022'
    },
    {
      projectName: 'Sign Third',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022'
    },
    {
      projectName: 'Sign Fourth',
      documentName: 'Testing Documents',
      date: 'August 31, 2022'
    },
    {
      projectName: 'Sign Five',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['vishal', 'dhaval', 'aditya']
    },
    {
      projectName: 'Sign Five',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['vishal', 'dhaval', 'aditya']
    },
    {
      projectName: 'Sign Five',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['vishal', 'dhaval', 'aditya']
    },
    {
      projectName: 'Sign Five',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['vishal', 'dhaval', 'aditya']
    },
    {
      projectName: 'Sign Five',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['vishal', 'dhaval', 'aditya']
    },
    {
      projectName: 'Sign Five',
      documentName: 'JP Morgan Investor Non Disclosure Agreement',
      date: 'August 31, 2022',
      signedArray: ['vishal', 'dhaval', 'aditya']
    }
  ];

  const changeDocument = (index) => {
    setActiveDocs(index);
  };

  useEffect(() => {
    let headerLogo = document.getElementById('headerLogo');
    if (activeDoc === 1) {
      headerLogo.style.background = '#0D5C06';
    } else if (activeDoc === 2) {
      headerLogo.style.background = '#AA2300';
    } else {
      headerLogo.style.background = '#0E4394';
    }
    return () => {
      headerLogo.style.background = '#0E4394';
    };
  }, [activeDoc]);

  const cardClick = (projectId) => {
    navigate(`/project-documents/${projectId}`);
  };

  return (
    <>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={`text_center`}>
            <h1 className={classes.pageTitle}>
              {t('dashboard_document_header_title')}
              {/* {t('dashboard_header_title')}
              <span className={classes.titleBold}> {t('value')} </span>
              {t('through_digital')}
              <span className={classes.titleBold}> {t('negotiation')}</span> */}
            </h1>
          </Box>
        </CustomContainer>
      </Box>
      <CustomContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Box className={classes.docSliderWrap}>
              <SliderContainer settings={docSetting} slideArray={documents}>
                {documents?.map((doc, Index) => {
                  return (
                    <Box
                      key={Index}
                      className={`slideBox_${Index} ${classes.docsliderBox}`}
                      onClick={() => changeDocument(Index)}>
                      <DashboardDocTypeCard
                        title={doc?.title}
                        subtitle={doc?.subtitle}
                        docIcon={doc?.docIcon}
                      />
                    </Box>
                  );
                })}
              </SliderContainer>
            </Box>
            {activeDoc === 0 && (
              <Box className={`gradianFirst ${classes.documentSection}`}>
                <DraftContainer setupDocument={setupDocument} />
              </Box>
            )}
            {activeDoc === 1 && (
              <Box className={`gradianSecond ${classes.documentSection}`}>
                <NegotiateContainer setupDocument={setupNegotiation} docLinkClick={docLinkClick} />
              </Box>
            )}
            {activeDoc === 2 && (
              <Box className={`gradianThird ${classes.documentSection}`}>
                <SignatureContainer setupDocument={setupDocument} templates={templates} />
              </Box>
            )}
            <Box className={classes.recentMain}>
              <Box className={classes.flexBetween}>
                <p className={classes.sectionTitle}>{t('recent_projects')}</p>
                {projectRows?.length ? <CustomLink to="/projects" text={t('view_all')} /> : ''}
              </Box>

              <Box className={classes.sliderWrap}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={4} lg={3} xl={2.5}>
                    <Box className={classes.emptyCardBox}>
                      <EmptyCard
                        actionClick={() => createProject(true, projectFormType, 'create')}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} lg={9} xl={9.5}>
                    <SliderContainer settings={settings}>
                      {projectRows?.map((project, Index) => {
                        return (
                          <Box key={Index} className={classes.sliderBox}>
                            <ProjectCard
                              project={project}
                              cardClick={cardClick}
                              docLinkClick={docLinkClick}
                            />
                          </Box>
                        );
                      })}
                    </SliderContainer>
                  </Grid>
                </Grid>
              </Box>

              {/* <Box className={classes.sliderWrap}>
                <SliderContainer settings={settings}>
                  <Box className={classes.emptyCardBox}>
                    <EmptyCard actionClick={() => createProject(true, projectFormType, 'create')} />
                  </Box>
                  {projectRows?.map((project, Index) => {
                    return (
                      <Box key={Index} className={classes.sliderBox}>
                        <ProjectCard
                          project={project}
                          cardClick={cardClick}
                          docLinkClick={docLinkClick}
                        />
                      </Box>
                    );
                  })}
                </SliderContainer>
              </Box> */}
            </Box>
          </>
        )}
      </CustomContainer>
    </>
  );
};

Dashboard.propTypes = {
  isLoading: PropTypes.any,
  projectRows: PropTypes.array,
  actionBtnClick: PropTypes.any,
  setupDocument: PropTypes.any,
  setupNegotiation: PropTypes.func,
  projectFormType: PropTypes.string,
  createProject: PropTypes.func,
  docLinkClick: PropTypes.func
};

export default Dashboard;
