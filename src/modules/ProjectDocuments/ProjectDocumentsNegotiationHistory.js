/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, InputAdornment } from '@mui/material';
import useStyle from './style';
import { useTranslation } from 'react-i18next';
import ShareDocumentInfoCard from 'components/ShareDocumentInfoCard/ShareDocumentInfoCard';
import { CustomContainer, NoDataFound } from 'components';
import { Formik, Form } from 'formik';
import { Search } from '@mui/icons-material';
import { InputField } from 'components/FormControls/Index';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import NegotiationHistoryIcon from 'assets/images/negotiation_history_icon';

const ProjectDocumentsNegotiationHistory = ({
  itemList,
  documentLinkClick,
  openMail,
  documentName
}) => {
  const { t } = useTranslation();
  const classes = useStyle();
  const [docView, setDocView] = useState({
    list: false,
    grid: true
  });
  const [search, setSearch] = useState('');
  const [filterItemList, setFilterItemList] = useState([]);

  const initialValues = {
    search: ''
  };

  useEffect(() => {
    let tempFilterList = itemList.filter(
      (item) =>
        item.versionLabel.toLowerCase().includes(search.toLowerCase()) ||
        item?.subject.toLowerCase().includes(search.toLowerCase()) ||
        item?.fromUser.toLowerCase().includes(search.toLowerCase()) ||
        item?.toUser.toLowerCase().includes(search.toLowerCase())
    );
    setFilterItemList(tempFilterList);
  }, [search, itemList]);

  return (
    <CustomContainer>
      <Box className={classes.titleSection}>
        <Box className={`d_flex d_flex_content_between`}>
          <Box className={`d_flex`}>
            <NegotiationHistoryIcon />
            <Box sx={{ ml: 1 }}>
              <h4 className={classes.sectionTitle}>{t('negotiation_history')}</h4>
              <p className={classes.sectionSubTitle}>{documentName}</p>
            </Box>
          </Box>
          <Box className={`d_flex d_flex_content_between`}>
            <Box>
              <Formik initialValues={initialValues}>
                {() => (
                  <Form id="search-form" className={classes.searchForm}>
                    <InputField
                      name="search"
                      type="search"
                      fullWidth
                      value={search}
                      placeholder={t('Search Name, People, Version')}
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
          </Box>
        </Box>
      </Box>
      <Box sx={{ pb: 3 }}>
        <Grid container spacing={2}>
          {filterItemList.length > 0 ? (
            filterItemList?.map((list, Index) => {
              return (
                <Grid item lg={2.4} sm={4} xs={2.4} key={Index}>
                  <Box className={classes.documentListCard}>
                    <ShareDocumentInfoCard
                      historyInfo={list}
                      documentListClick={(e) => documentLinkClick(e, list)}
                      openMail={openMail}
                    />
                  </Box>
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12}>
              <NoDataFound />
            </Grid>
          )}
        </Grid>
      </Box>
    </CustomContainer>
  );
};

ProjectDocumentsNegotiationHistory.propTypes = {
  itemList: PropTypes.array,
  documentLinkClick: PropTypes.func,
  openMail: PropTypes.func,
  documentName: PropTypes.string
};

export default ProjectDocumentsNegotiationHistory;
