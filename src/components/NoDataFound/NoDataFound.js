import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';
import { useTranslation } from 'react-i18next';

const NoDataFound = ({ message }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.noDataFound}>
      <Typography>{message ? message : t('no_data_found')}</Typography>
    </Box>
  );
};

NoDataFound.propTypes = {
  message: PropTypes.string
};

export default NoDataFound;
