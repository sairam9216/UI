import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Box } from '@mui/material';
import { ImagePlaceholder } from 'utils/images';
import useStyles from './style';
function ActivityCard({ id, imgUrl, contractName, contractDescription }) {
  const classes = useStyles();
  return (
    <div id={`card-${id}`} className={`d_flex  ${classes.activityUser}`}>
      <Box sx={{ borderRadius: '50%' }} className={classes.activityUserProfile}>
        <img
          src={imgUrl ? imgUrl : ImagePlaceholder}
          alt={contractName}
          className={classes.activityImage}
        />
      </Box>
      <div className={classes.activityUserDescription}>
        <h4 className={classes.activityUserName}>{contractName}</h4>
        <p className={classes.activityUserStatus}>{contractDescription}</p>
      </div>
    </div>
  );
}

ActivityCard.propTypes = {
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  contractName: PropTypes.string,
  contractDescription: PropTypes.string
};

export default React.memo(ActivityCard);
