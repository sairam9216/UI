import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';
import useStyle from './style';
function TemplateSkeleton({ variant = 'rectangular', width }) {
  const classes = useStyle();
  return (
    <Box sx={{ mx: 1 }} className={classes.skelatonBox}>
      <Skeleton animation="wave" height={10} width="40%" />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 15 }}
      />
      <Skeleton animation="wave" height={10} width="40%" />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
      <Skeleton
        animation="wave"
        variant={variant}
        width={width ? width : '100%'}
        height={10}
        style={{ marginBottom: 6 }}
      />
    </Box>
  );
}
TemplateSkeleton.propTypes = {
  variant: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any
};

export default TemplateSkeleton;
