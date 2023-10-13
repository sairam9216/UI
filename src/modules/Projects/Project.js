import { Box, CircularProgress, Grid, InputAdornment } from '@mui/material';
import { CustomContainer, ProjectCard, EmptyCard, Loader } from 'components';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArrowBack } from 'utils/images';
import { Formik, Form } from 'formik';
import { Search } from '@mui/icons-material';
import { InputField } from 'components/FormControls/Index';

function Project({
  actionClick,
  formType,
  docLinkClick,
  isLoading,
  search,
  setSearch,
  setPageData,
  allData,
  totalCount
}) {
  const { t } = useTranslation();
  const classes = useStyles();
  let navigate = useNavigate();
  const initialValues = {
    search
  };
  const cardClick = (projectId) => {
    navigate(`/project-documents/${projectId}`, { state: 'projects' });
  };

  return (
    <>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={classes.linkText}>
            <Link to="/dashboard">
              <img src={ArrowBack} alt="back" /> {t('back')}
            </Link>
          </Box>
          <Box className={`text_center`}>
            <h1 className={classes.pageTitle}> {t('all_project')} </h1>
            {/* <p className={classes.pageSubtitle}>{t('project_header_subTitle')}</p> */}
          </Box>
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item xs={12} sm={6} md={3}>
              <Formik initialValues={initialValues}>
                {() => (
                  <Form id="search-form">
                    <InputField
                      name="search"
                      type="search"
                      fullWidth
                      value={search}
                      placeholder={t('search_project')}
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
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
      <CustomContainer>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <InfiniteScroll
              dataLength={allData.length}
              next={setPageData}
              hasMore={allData.length > 0 && totalCount !== allData.length ? true : false}
              loader={
                <Box className={'d_flex d_flex_content_center'}>
                  <CircularProgress />
                </Box>
              }
              scrollThreshold={0.4}
              className={classes.projectContent}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item lg={2.4} md={3} sm={4} xs={12}>
                    <EmptyCard actionClick={(e) => actionClick(e, true, formType, 'create')} />
                  </Grid>
                  {allData?.map((project, Index) => {
                    return (
                      <Grid item lg={2.4} md={3} sm={4} xs={12} key={Index}>
                        <ProjectCard
                          formType={formType}
                          project={project}
                          isEditable={project?.isReviewer ? false : true}
                          actionClick={actionClick}
                          cardClick={cardClick}
                          docLinkClick={docLinkClick}
                          itemIndex={Index}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </InfiniteScroll>
          )}
        </Box>
      </CustomContainer>
    </>
  );
}

Project.propTypes = {
  isLoading: PropTypes.bool,
  projectRows: PropTypes.array,
  actionClick: PropTypes.func,
  docLinkClick: PropTypes.func,
  formType: PropTypes.string,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  totalCount: PropTypes.number,
  setPageData: PropTypes.func,
  pageData: PropTypes.any,
  allData: PropTypes.array
};

export default Project;
