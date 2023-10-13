import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//Material UI
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
//style
import useStyles from './style';

const CommonButton = ({
  btnLabel,
  className,
  startIcon,
  endIcon,
  type,
  onClick,
  disable,
  form,
  variant,
  fullWidth,
  size,
  uppercase
}) => {
  const classes = useStyles();
  return (
    <Button
      sx={{ textTransform: uppercase ? 'uppercase' : 'capitalize' }}
      fullWidth={fullWidth ? fullWidth : false}
      form={form}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disable}
      type={type}
      className={clsx(`${classes.button}`, className)}
      variant={variant}
      onClick={onClick}
      size={size ? size : 'large'}>
      {btnLabel}
      {disable && (
        <CircularProgress
          style={{ width: '15px', height: '15px', marginLeft: '10px' }}
          className={classes.circularLoader}
        />
      )}
    </Button>
  );
};

CommonButton.propTypes = {
  btnLabel: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  form: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.any,
  size: PropTypes.any,
  uppercase: PropTypes.any,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any
};

CommonButton.defaultProps = {
  btnLabel: 'Submit',
  className: '',
  type: 'submit',
  onClick: () => {},
  disable: false,
  form: '',
  variant: 'contained'
};

export default CommonButton;
