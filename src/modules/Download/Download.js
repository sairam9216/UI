import React from 'react';
import { CustomContainer } from 'components';
import { Box } from '@mui/material';
import useStyle from './style';

function Notification() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={`text_center`}>
            <h1 className={classes.pageTitle}>Download</h1>
          </Box>
        </CustomContainer>
      </Box>
    </>
  );
}

export default Notification;
