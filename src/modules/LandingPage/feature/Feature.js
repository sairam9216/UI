import { Box } from '@mui/material';
import React, { useState } from 'react';
import useStyle from '../style';
import partnerImage1 from './../images/shareScreen.png';
import partnerImage2 from './../images/deliverScreen.png';
import partnerImage3 from './../images/manageScreen.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FeatureList from './FeatureList';
const Feature = () => {
  const classes = useStyle();
  const [featuresData] = useState([
    {
      icon: <EmailOutlinedIcon />,
      featureTitle: 'Share team inboxes',
      featureSubtitle:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      posterImage: partnerImage1,
      featuresList: [
        'Leverage automation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster'
      ]
    },
    {
      icon: <BoltOutlinedIcon />,
      featureTitle: 'Deliver instant answers',
      featureSubtitle:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      posterImage: partnerImage2,
      featuresList: [
        'Keep your customers in the loop with live chat',
        'Embed help articles right on your website',
        'Customers never have to leave the page to find an answer'
      ]
    },
    {
      icon: <BarChartOutlinedIcon />,
      featureTitle: 'Manage your team with reports',
      featureSubtitle:
        'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      posterImage: partnerImage3,
      featuresList: [
        'Filter, export, and drilldown on the data quickly',
        'Save, schedule, and automate reports to your inbox',
        'Connect the tools you already use with 100+ integrations'
      ]
    }
  ]);

  return (
    <Box className={`${classes.featureSectionWrap}`}>
      <Box className={`text_center ${classes.featureSection}`}>
        <p className={classes.featureTitle}>Features</p>
        <h2 className={classes.featureBigTitle}>Analytics that feels like it’s from the future</h2>
        <p className={classes.featureDesc}>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </Box>
      {featuresData?.map((feature, index) => {
        return <FeatureList feature={feature} key={index} />;
      })}
    </Box>
  );
};

export default Feature;
