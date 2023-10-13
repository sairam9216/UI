import React from 'react';
import PropTypes from 'prop-types';
import useStyle from './style';
import ListRow from './ListRow';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link } from 'react-router-dom';

function Notification() {
  const classes = useStyle();
  return (
    <div className={classes.notificationBox}>
      <div className={`d_flex d_flex_align d_flex_content_between ${classes.notificationHeader}`}>
        <h4>Notifications </h4>
        <span className={`pointer text_upperCase ${classes.clearAll}`}> clear all </span>
      </div>
      <div className={classes.notificationContent}>
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
        <ListRow />
      </div>
      <div className={`d_flex d_flex_content_center ${classes.viewAll}`}>
        <Link to="/notification" className={'pointer d_flex d_flex_align'}>
          View All
          <ArrowForwardRoundedIcon fontSize="small" sx={{ ml: 1 }} />
        </Link>
      </div>
    </div>
  );
}

Notification.propTypes = {
  Notificationarray: PropTypes.array
};

export default Notification;
