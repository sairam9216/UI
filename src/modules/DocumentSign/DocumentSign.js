import React from 'react';
import { CustomContainer } from 'components';
import { Box, Grid } from '@mui/material';
import useStyle from './style';
import DocumentSidebar from './DocumentSidebar';

const DocumentSign = () => {
  const classes = useStyle();
  return (
    <CustomContainer>
      <Grid container>
        <Grid item sm={4} md={3} lg={2} className={classes.sideBar}>
          <Box>
            <DocumentSidebar />
          </Box>
        </Grid>
        <Grid item sm={8} md={9} lg={10} className={classes.documentBox}>
          <Box></Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default DocumentSign;
