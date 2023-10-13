import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Pagination = ({ children, isFetching, totalCount, allData, setPageData }) => {
  const loadMoreData = () => {
    if (
      Math.floor(window.innerHeight + document.documentElement.scrollTop) ===
      document.scrollingElement.scrollHeight
    ) {
      if (totalCount > allData.length) {
        setPageData();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', loadMoreData);
    return () => window.removeEventListener('scroll', loadMoreData);
  }, [allData]);

  return (
    <>
      {children}
      <Box className={'d_flex d_flex_content_center'}>{isFetching && <CircularProgress />}</Box>
    </>
  );
};
Pagination.propTypes = {
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  totalCount: PropTypes.number,
  allData: PropTypes.array,
  setPageData: PropTypes.func
};
export default Pagination;
