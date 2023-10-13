import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './style.scss';

function Loader() {
  return (
    <div className="loader_wrapper d_flex d_flex_align d_flex_content_center">
      <CircularProgress />
    </div>
  );
}

export default Loader;
