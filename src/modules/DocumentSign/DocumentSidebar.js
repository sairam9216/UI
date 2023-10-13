import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ApprovalIcon from '@mui/icons-material/Approval';
import useStyle from './style';

function DocumentSidebar() {
  const classes = useStyle();
  const [docList] = React.useState([
    {
      icon: <BorderColorIcon />,
      label: 'Signature'
    },
    {
      icon: <BorderColorIcon />,
      label: 'Initial'
    },
    {
      icon: <ApprovalIcon />,
      label: 'Stamp'
    }
  ]);
  return (
    <div>
      <List>
        {docList?.map((list, index) => {
          return (
            <ListItemButton key={index}>
              <ListItemIcon className={classes.sidebarIcon}>{list?.icon}</ListItemIcon>
              <ListItemText primary={list?.label} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
}

export default DocumentSidebar;
