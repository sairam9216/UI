import React from 'react';
import useStyle from './style';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const DocMoreDetail = ({ details }) => {
  const classes = useStyle();
  const { fromUser, toUser, subject, message } = details;
  return (
    <Box>
      <Box className={classes.fromSection}>
        <Box className={`d_flex`} sx={{ pb: 1 }}>
          <h4 className={classes.label}>From : </h4>
          <p className={classes.description}>{fromUser}</p>
        </Box>
        <Box className={`d_flex`} sx={{ pb: 1 }}>
          <h4 className={classes.label}>To : </h4>
          <p className={classes.description}>{toUser}</p>
        </Box>
        <Box className={`d_flex `} sx={{ pb: 2 }}>
          <h4 className={classes.label}>Subject : </h4>
          <p className={classes.description}>{subject}</p>
        </Box>
      </Box>
      <Box sx={{ pt: 2 }} className={classes.borderTop}>
        <h4 className={classes.label}>Message</h4>
        <p className={classes.description}>{message}</p>
      </Box>
    </Box>
  );
};

DocMoreDetail.propTypes = {
  details: PropTypes.object
};

export default DocMoreDetail;
