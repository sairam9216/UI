import React from 'react';
import PropTypes from 'prop-types';
//Material UI
import { Box } from '@mui/material';
import useStyle from './style';

const ConfirmationModal = ({ title, description, descriptionFirst, descriptionSecond }) => {
  const classes = useStyle();
  return (
    <Box className={classes.detailContent}>
      <h6 className={classes.modalTitle}>{title}</h6>
      {descriptionFirst && <p> {descriptionFirst} </p>}
      {descriptionSecond && <p> {descriptionSecond} </p>}
      {description}
    </Box>
  );
};

ConfirmationModal.propTypes = {
  title: PropTypes.string,
  descriptionFirst: PropTypes.string,
  descriptionSecond: PropTypes.string,
  description: PropTypes.any
};

export default ConfirmationModal;
