import React, { useState } from 'react';
import { Box } from '@mui/material';
import useStyle from '../style';
import patrtnerImage from './../images/partner1.png';
import patrtnerImage2 from './../images/partner2.png';
import patrtnerImage3 from './../images/partner3.png';
import { SliderContainer } from 'components';
const Partner = () => {
  const classes = useStyle();
  const [sponsorArray] = useState([
    {
      imgUrl: patrtnerImage
    },
    {
      imgUrl: patrtnerImage2
    },
    {
      imgUrl: patrtnerImage3
    },
    {
      imgUrl: patrtnerImage
    },
    {
      imgUrl: patrtnerImage2
    },
    {
      imgUrl: patrtnerImage
    },
    {
      imgUrl: patrtnerImage2
    },
    {
      imgUrl: patrtnerImage3
    }
  ]);

  let sponserSetting = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <Box className={`text_center ${classes.partnerSection}`}>
      <p className={classes.partnerTitle}>Join 4,000+ companies already growing</p>
      <Box className={`${classes.partnerWrap}`}>
        <SliderContainer settings={sponserSetting}>
          {sponsorArray?.map((sponser, index) => {
            return (
              <Box className={`d_flex d_flex_align ${classes.partnerImage}`} key={index}>
                <img src={sponser?.imgUrl} alt="partner" width={'140'} height={'35'} />
              </Box>
            );
          })}
        </SliderContainer>
      </Box>
    </Box>
  );
};

export default Partner;
