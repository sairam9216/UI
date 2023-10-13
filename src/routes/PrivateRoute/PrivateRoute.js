import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useMsal } from '@azure/msal-react';
// import { Navigate } from 'react-router-dom';
import { getToken, removeToken } from 'utils/index';
import { setUserData } from 'store/slice/userSlice';
import { getCustomLoginRequest } from 'config';
import { useSearchParams } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { accounts, instance } = useMsal();
  const [isValidate, setIsValidate] = useState(false);
  const [isAccessiblePage, setIsAccessiblePage] = useState(false);
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const loginRequest = getCustomLoginRequest(email);

  useEffect(() => {
    const verifyAuthAndGetUserDetail = () => {
      const token = getToken();
      if (token) {
        if (!user) {
          if (accounts.length > 0) {
            dispatch(setUserData(accounts[0]));
            setIsAccessiblePage(true);
          } else {
            removeToken();
          }
        } else {
          setIsAccessiblePage(true);
        }
      }
      setIsValidate(true);
    };
    verifyAuthAndGetUserDetail();
  }, []);

  const signInWithMicrosoft = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  if (!isValidate) {
    return null;
  }

  if (isValidate && !isAccessiblePage) {
    localStorage.setItem('referralUrl', window.location.pathname);
    signInWithMicrosoft();
    return null;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any
};
export default PrivateRoute;
