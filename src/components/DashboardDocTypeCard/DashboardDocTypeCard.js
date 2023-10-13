import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useStyle from './style';

const DashboardDocTypeCard = ({ title, docIcon }) => {
  const classes = useStyle();
  return (
    <Box className={classes.cardMain}>
      <Box className={`d_flex d_flex_align cardContentBg ${classes.cardContent}`}>
        <Box className={classes.docImage}>
          <img
            src={docIcon}
            alt="document image"
            width="49"
            height="48"
            className={classes.cardImage}
          />
        </Box>
        <Box className={classes.docData}>
          <h5 className={classes.title}>{title}</h5>
        </Box>
      </Box>
    </Box>
  );
};

DashboardDocTypeCard.propTypes = {
  title: PropTypes.string,
  docIcon: PropTypes.string
};

export default DashboardDocTypeCard;
