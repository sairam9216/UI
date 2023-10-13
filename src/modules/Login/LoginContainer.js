import React, { useEffect } from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';
import { loginRequest } from 'config';
import { useMsal } from '@azure/msal-react';
import { getToken } from 'utils';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const user = useSelector((state) => state.userData.user);
  const signInWithMicrosoft = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  useEffect(() => {
    const redirectVerification = () => {
      const token = getToken();
      if (token && user) {
        navigate('/dashboard');
      }
    };
    redirectVerification();
  }, [user]);

  return (
    <>
      <Login signInWithMicrosoft={signInWithMicrosoft} />
    </>
  );
};

export default LoginContainer;
