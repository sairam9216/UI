import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import useStyle from './style';
import { useSelector } from 'react-redux';
import { useLogout } from 'hooks/Logout/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';
const UserMenu = () => {
  const classes = useStyle();
  const { user } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);
  const logOut = useLogout();
  const OpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const goToSettingPage = () => {
    handleClose();
    navigate('/setting');
  };

  return (
    <div className={`d_flex d_flex_align ${classes.userMenu}`}>
      <div className={`text_right ${classes.userInfo}`}>
        <h4 className={classes.userName}> {user?.name ? user?.name : 'USER NAME'} </h4>
        <h6 className={classes.userEmail}> {user?.username ? user?.username : 'USER Email'} </h6>
      </div>
      <div className="user_image">
        <IconButton size="small" onClick={(e) => OpenUserMenu(e)}>
          <Avatar alt="User Name" src="" sx={{ width: 45, height: 45 }} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>
            <Link to="/profile" className="d_flex d_flex_align">
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              {'Profile'}
            </Link>
          </MenuItem>
          <MenuItem onClick={() => goToSettingPage()}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {t('settings')}
          </MenuItem>
          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {t('logout')}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserMenu;
