import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import useStyle from './style';

const CustomLink = ({ to, text }) => {
  const classes = useStyle();
  return (
    <Link to={to} className={`d_flex d_flex_align ${classes.linkText}`}>
      {text} <ArrowForwardRoundedIcon fontSize="small" />
    </Link>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
};
export default CustomLink;
