import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';
import useStyle from './style';

const CustomCheckbox = ({ label, className }) => {
  const classes = useStyle();
  return (
    <FormControlLabel
      control={<Checkbox />}
      label={label}
      className={`${className ? className : classes.checkboxMain}`}
    />
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
};

export default CustomCheckbox;
