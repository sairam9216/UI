import React from 'react';
import { CustomContainer } from 'components';
import Banner from './banner/Banner';
import Feature from './feature/Feature';
import Header from './header/header';
import Partner from './partner/Partner';
import Projects from './projects/Projects';
import Trial from './trial/Trial';
import Testimonial from './testimonial/Testimonial';
import Footer from './footer/Footer';
import { Box } from '@mui/material';
import useStyle from './style';

const LandingContainer = () => {
  const classes = useStyle();

  return (
    <div>
      <Box className={classes.headerMain}>
        <CustomContainer className={'container1440'}>
          <Header />
          <Banner />
        </CustomContainer>
      </Box>
      <CustomContainer className={'container1440'}>
        <Partner />
        <Feature />
        <Trial />
        <Projects />
        <Testimonial />
      </CustomContainer>
      <Footer />
    </div>
  );
};

export default LandingContainer;
