import { Box, Grid } from '@mui/material';
import { CommonButton } from 'components/FormControls/Index';
import React from 'react';
import useStyle from '../style';
const Trial = () => {
  const classes = useStyle();
  return (
    <Box className={classes.trialSection}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <h3 className={classes.featureListTitle}>{'Start your 30-day free trial'}</h3>
          <p className={classes.trialSubtitle}>
            {'Join over 4,000+ startups already growing with BargainingTable.'}
          </p>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box className="d_flex d_flex_wrap">
            <Box sx={{ m: 1 }} className={'shrink0'}>
              <CommonButton className="btnSecondary" btnLabel={'Learn more'}></CommonButton>
            </Box>
            <Box sx={{ m: 1 }} className={'shrink0'}>
              <CommonButton btnLabel={'Get started'}></CommonButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trial;
