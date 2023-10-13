/* eslint-disable */
import { Box, Toolbar, AppBar, Typography, Divider, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyle from '../style';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from 'config';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';

const Header = (props) => {
  const { window } = props;
  const classes = useStyle();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { instance } = useMsal();

  const drawerMenusArray = [
    { title: 'Home', url: '/', hasMenu: false },
    {
      title: 'Resources',
      hasMenu: true,
      submenu: [
        { title: 'Resources 1', url: '/' },
        { title: 'Resources 2', url: '/' },
        { title: 'Resources 3', url: '/' }
      ]
    },
    {
      title: 'Resources 2',
      url: '/',
      hasMenu: false
    },
    { title: 'Pricing', url: '/' },
    {
      title: 'Login',
      signInClick: function () {
        return signInWithMicrosoft();
      }
    }
  ];

  const menusArray = [
    { title: 'Home', url: '/', hasMenu: false },
    {
      title: 'Resources',
      hasMenu: true,
      submenu: [
        { title: 'Resources 1', url: '/' },
        { title: 'Resources 2', url: '/' },
        { title: 'Resources 3', url: '/' }
      ]
    },
    {
      title: 'Resources 2',
      url: '/',
      hasMenu: false
    },
    { title: 'Pricing', url: '/' }
  ];

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const signInWithMicrosoft = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  const listItemBtn = (item) => {
    if (item.url) {
      return (
        <ListItemButton>
          <Link to="/">{item?.title}</Link>
        </ListItemButton>
      );
    } else {
      if (item.signInClick) {
        return (
          <ListItemButton onClick={() => item?.signInClick()}>
            <p>{t('login')}</p>
          </ListItemButton>
        );
      } else {
        return (
          <ListItemButton onClick={() => handleClick()}>
            <ListItemText primary={item.title} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        );
      }
    }
  };

  const drawerWidth = 240;
  const container = window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box className={classes.headerLeft} sx={{ p: 2 }}>
        <Link to="/" className={`${classes.headerLogo}`}>
          Bargaining
        </Link>
        <Box className={`${classes.tableBtn}`}>
          <Link to="/">
            <label className="pointer text_upperCase">{'Table'}</label>
          </Link>
        </Box>
      </Box>
      <Divider />
      <List>
        {drawerMenusArray?.map((item, i) => {
          return (
            <React.Fragment key={i}>
              {listItemBtn(item)}
              {item?.hasMenu && (
                <Collapse in={open} timeout="auto">
                  {item?.submenu.map((subItem, index) => {
                    return (
                      <List component="div" disablePadding key={index}>
                        <ListItemButton>
                          <Link to="/">{subItem?.title}</Link>
                        </ListItemButton>
                      </List>
                    );
                  })}
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className={classes.headerAppBar}>
        <Toolbar disableGutters className="d_flex_content_between">
          <Box className="d_flex d_flex_align">
            <Box className={classes.headerLeft}>
              <Link to="/" className={`${classes.headerLogo}`}>
                Bargaining
              </Link>
              <Box className={`${classes.tableBtn}`}>
                <Link to="/">
                  <label className="pointer text_upperCase">{'Table'}</label>
                </Link>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <div className="d_flex">
                {menusArray?.map((menu, index) => {
                  return (
                    <Box key={index} className={`relative ${classes.menuItem}`}>
                      {menu?.hasMenu ? (
                        <>
                          <Typography textAlign="center">{menu?.title}</Typography>
                          <ul className="submenu">
                            {menu?.submenu?.map((sub, i) => {
                              return (
                                <li className={classes.submenuItem} key={i}>
                                  <a href="#">{sub?.title}</a>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      ) : (
                        <Link to={`${menu?.url}`}> {menu?.title} </Link>
                      )}
                    </Box>
                  );
                })}
              </div>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box className="d_flex d_flex_align">
              <Button className={classes.loginLink} onClick={() => signInWithMicrosoft()}>
                {t('login')}
              </Button>
            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuToggle}
            sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
