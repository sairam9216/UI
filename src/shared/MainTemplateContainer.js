import React from 'react';
import PropTypes from 'prop-types';

import Maintemplate from './Maintemplate';
//Material UI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Constant

function MainTemplateContainer({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawer_width = 250;
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Maintemplate
      childrenData={children}
      drawerWidth={drawer_width}
      handleDrawerToggle={handleDrawerToggle}
      isNavbarOpen={isNavbarOpen}
      isMobile={isMobile}
    />
  );
}

MainTemplateContainer.propTypes = {
  children: PropTypes.any
};
export default MainTemplateContainer;
