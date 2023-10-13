import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import useStyle from '../style';
const Projects = () => {
  const classes = useStyle();
  const [projectsData] = useState([
    {
      number: '400+',
      title: 'Projects completed'
    },
    {
      number: '600%',
      title: 'Return on investment'
    },
    {
      number: '10k',
      title: 'Global downloads'
    }
  ]);
  return (
    <Box className={classes.projectSection}>
      <Box>
        <Box className="d_flex d_flex_align d_flex_content_center">
          <Box className={`d_flex d_flex_align d_flex_content_center ${classes.featureIcon}`}>
            <BoltOutlinedIcon />
          </Box>
        </Box>
        <Box className={`text_center ${classes.projectTop}`}>
          <h3 className={classes.featureListTitle}>{'Unleash the full power of data'}</h3>
          <p className={classes.featureListSubtitle}>
            {'Everything you need to convert, engage, and retain more users.'}
          </p>
        </Box>
        <Box className={classes.projectBox}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {projectsData?.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={4} md={3} className={classes.projectItem}>
                  <Box className={`text_center`}>
                    <h2 className={classes.projectNumber}>{item?.number}</h2>
                    <p className={classes.projectTitle}>{item?.title}</p>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
