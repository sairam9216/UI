import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getToken } from 'utils/index';
import { useSearchParams } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  const openId = searchParams.get('openId');
  if (openId) {
    window.location =
      'ms-word:ofe|u|https://bargainingtable.sharepoint.com/sites/btprod1/BTDocuments/BTServiceActive/' +
      openId;
    if (getToken()) {
      return <Navigate to="/dashboard" />;
    }
  }

  if (getToken() && !openId) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.any
};
export default PublicRoute;
