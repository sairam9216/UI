import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData, setTheme } from 'store/slice/userSlice';
import { removeToken } from 'utils';
import { useMsal } from '@azure/msal-react';

function handleLogout(instance, accounts, navigate, dispatch) {
  let params = {};
  if (accounts.length > 0) {
    const currentAccount = instance.getAccountByHomeId(accounts[0].homeAccountId);
    params = {
      account: currentAccount
    };
  }
  instance
    .logoutPopup(params)
    .then(() => {
      dispatch(setUserData(null));
      removeToken();
      dispatch(setTheme('default'));
      navigate('/');
    })
    .catch((e) => {
      console.error(e);
    });
}

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  return () => {
    handleLogout(instance, accounts, navigate, dispatch);
  };
};
