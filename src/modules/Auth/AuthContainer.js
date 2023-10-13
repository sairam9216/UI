import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getToken, removeToken } from 'utils';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components';
import { useUserSetTokenMutation } from 'store/API/userApi';
import AlertMessage from 'utils/AlertMessage';
import { setUserData, setTheme } from 'store/slice/userSlice';
import { useDispatch } from 'react-redux';

const AuthContainer = () => {
  const user = useSelector((state) => state.userData.user);
  const [userSetToken] = useUserSetTokenMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setupTokenOnBtServer = async (email) => {
    const userTokenApiData = await userSetToken({ email });
    if (userTokenApiData?.data && userTokenApiData?.data?.status) {
      navigate('/dashboard', { replace: true });
    } else {
      AlertMessage('Something went wrong please try again.', 'error');
      dispatch(setUserData(null));
      removeToken();
      dispatch(setTheme('default'));
      navigate('/');
    }
  };

  useEffect(() => {
    const redirectVerification = () => {
      let token = getToken();
      if (token && user) {
        setupTokenOnBtServer(user.username);
      }
    };
    redirectVerification();
  }, [user]);

  return <Loader />;
};

export default AuthContainer;
