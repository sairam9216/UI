import React from 'react';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { CustomContainer } from 'components';
import useStyle from './style';

function Notification() {
  const classes = useStyle();
  const NotificationRow = () => {
    return (
      <div className={`d_flex ${classes.listRow}`}>
        <div className={classes.icon}>
          <ChatOutlinedIcon />
        </div>
        <div className={classes.rowData}>
          <h4 className={classes.title}>Bargaining Table Investor...</h4>
          <p className={classes.subtitle}>
            Tom Jesper commented to the doucment. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </div>
      </div>
    );
  };

  return (
    <CustomContainer>
      <div className="text_center">
        <h2 className={classes.pageTitle}>All Notifications</h2>
      </div>
      <div className={classes.notificationContent}>
        <NotificationRow />
        <NotificationRow />
        <NotificationRow />
        <NotificationRow />
        <NotificationRow />
        <NotificationRow />
      </div>
    </CustomContainer>
  );
}

export default Notification;
