import React from 'react';
import PropTypes from 'prop-types';
import useStyle from './style';
import IconButton from '@mui/material/IconButton';

const ButtonIcon = ({ label, size, className, buttonClick, Icon }) => {
  const classes = useStyle();
  return (
    <IconButton
      aria-label={label}
      size={`${size ? size : 'small'}`}
      className={`${classes.IconButton} ${className}`}
      onClick={() => buttonClick()}>
      {Icon}
    </IconButton>
  );
};

ButtonIcon.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  buttonClick: PropTypes.func,
  Icon: PropTypes.any
};

export default ButtonIcon;
