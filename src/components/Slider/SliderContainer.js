import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import useStyle from './style';
const SliderContainer = ({ settings, children, sliderRef, customClass }) => {
  const classes = useStyle();
  return (
    <Slider
      ref={sliderRef}
      {...settings}
      className={`sliderMain ${classes.customSlider} ${settings.dots ? 'dotSLider' : ''} ${
        customClass ? customClass : ''
      }`}>
      {children}
    </Slider>
  );
};

SliderContainer.propTypes = {
  settings: PropTypes.object,
  children: PropTypes.any,
  sliderRef: PropTypes.any,
  customClass: PropTypes.string
};

export default SliderContainer;
