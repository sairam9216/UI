import React, { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import startupPoster from './../images/startupPoster.png';
import useStyle from '../style';
import FeatureList from '../feature/FeatureList';
const Testimonial = () => {
  const classes = useStyle();
  const [featureData] = useState({
    icon: '',
    featureTitle: 'Join 4,000+ startups growing with Untitled',
    featureSubtitle:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    posterImage: startupPoster,
    featuresList: ['30-day free trial', 'Peronalized onboarding', 'Access to all features']
  });
  return (
    <>
      <Box className={classes.testimonialSection}>
        <Box className="text_center">
          <h3 className={classes.testimonialTitle}>
            Untitled has saved us thousands of hours of work and has unlock data insights we never
            thought possible.
          </h3>

          <Box>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
              className={classes.testimonialUser}
            />
            <p className={classes.userName}>Koray Okumus</p>
            <p className={classes.userRole}>UX Designer, Circooles</p>
          </Box>
        </Box>
      </Box>
      <Box className={`${classes.startupSection}`}>
        <FeatureList feature={featureData} />
      </Box>
    </>
  );
};

export default Testimonial;
