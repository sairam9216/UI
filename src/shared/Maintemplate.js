import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from 'components/Header/HeaderContainer.js';
import useStyles from './style';
import { Box } from '@mui/material';
import { CustomContainer } from 'components/index.js';

function Maintemplate({ childrenData, handleDrawerToggle, isNavbarOpen }) {
  const classes = useStyles();
  return (
    <>
      <HeaderContainer handleDrawerToggle={handleDrawerToggle} isNavbarOpen={isNavbarOpen} />
      <Box className={classes.pageContent}>{childrenData}</Box>
      <footer className={classes.footer}>
        <CustomContainer>
          <p className={`text_center ${classes.copyRightText}`}>
            All rights reserved. &copy; {new Date().getFullYear()} Bargaining Table
          </p>
        </CustomContainer>
      </footer>
    </>
  );
}

Maintemplate.propTypes = {
  childrenData: PropTypes.any,
  handleDrawerToggle: PropTypes.any,
  isNavbarOpen: PropTypes.any
};

export default Maintemplate;
