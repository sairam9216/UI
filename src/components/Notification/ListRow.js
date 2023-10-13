import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import useStyle from './style';

function ListRow() {
  const classes = useStyle();

  return (
    <div className={`d_flex pointer ${classes.listRow}`}>
      <Box sx={{ mr: 1.5 }}>
        <Avatar> R </Avatar>
      </Box>
      <div>
        <Box className={`d_flex d_flex_align d_flex_content_between`}>
          <h5 className={classes.title}>Bipul Raj</h5>
          <p className={`${classes.subtitle}`}> 10 AM </p>
        </Box>
        <p className={`singleLine ${classes.subtitle}`}>
          Some technical error occurred needs to be resolved occurred needs to be resolved.
        </p>
      </div>
    </div>
  );
}

export default ListRow;
