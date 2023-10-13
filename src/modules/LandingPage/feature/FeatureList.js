import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import useStyle from '../style';
import CheckedIcon from './../images/checked';
import { CommonButton } from 'components/FormControls/Index';

function FeatureList({ feature }) {
  const classes = useStyle();
  const { icon, featureTitle, featureSubtitle, featuresList, posterImage } = feature;
  return (
    <Grid container spacing={2} alignItems="center" className={'featureListRow'}>
      <Grid item xs={12} md={6} className={'featureDescBox'}>
        <Box className={classes.featureData}>
          {icon && (
            <Box className={`d_flex d_flex_align d_flex_content_center ${classes.featureIcon}`}>
              {icon}
            </Box>
          )}
          <Box>
            <h3 className={classes.featureListTitle}>{featureTitle}</h3>
            <p className={classes.featureListSubtitle}>{featureSubtitle}</p>
          </Box>
          <Box>
            <List>
              {featuresList?.map((list, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon className={classes.checkIcon}>
                      <CheckedIcon />
                    </ListItemIcon>
                    <ListItemText secondary={list} className={classes.checkText} />
                  </ListItem>
                );
              })}
            </List>
            <Box className="d_flex d_flex_wrap">
              <Box sx={{ m: 1 }} className={'shrink0'}>
                <CommonButton className="btnSecondary" btnLabel={'Learn more'}></CommonButton>
              </Box>
              <Box sx={{ m: 1 }} className={'shrink0'}>
                <CommonButton btnLabel={'Get started'}></CommonButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className={'featureImageBox'}>
        <Box className={'featureImage'}>
          <img src={posterImage} alt="features" />
        </Box>
      </Grid>
    </Grid>
  );
}
FeatureList.propTypes = {
  feature: PropTypes.object
};

export default FeatureList;
