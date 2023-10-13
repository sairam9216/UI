import React from 'react';
import { useNavigate } from 'react-router-dom';
// Material UI
import { Box, Typography } from '@mui/material';
import useStyle from './style';
import ErrorIcon from '@mui/icons-material/Error';
import { CommonButton } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';

const NoPageFound = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <Box className={classes.notFoundPage}>
      <div className={classes.content}>
        <ErrorIcon sx={{ fontSize: 60 }} color="error" />
        <Typography variant="h5" className={classes.contentMsg}>
          {' '}
          Sorry, page not found!
        </Typography>
        <p style={{ textAlign: 'center', marginBottom: 20, width: 300 }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the check
          check your spelling.
        </p>
        <CommonButton
          btnLabel={t('back_to_home')}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </Box>
  );
};

export default NoPageFound;
