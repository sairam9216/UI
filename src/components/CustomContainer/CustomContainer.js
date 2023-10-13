import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import useStyle from './style';

function CustomContainer({ children, maxWidth, ...rest }) {
  const classes = useStyle();

  return (
    <Container
      maxWidth={maxWidth ? maxWidth : ''}
      className={`${maxWidth ? maxWidth : classes.ContainerWidth}`}
      {...rest}>
      {children}
    </Container>
  );
}

CustomContainer.propTypes = {
  children: PropTypes.any,
  maxWidth: PropTypes.string
};

export default CustomContainer;
