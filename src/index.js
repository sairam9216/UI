import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './config';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { setUserData } from 'store/slice/userSlice';
import { setToken } from 'utils';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './i18nextInit';

const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.handleRedirectPromise().then((tokenResponse) => {
  if (tokenResponse) {
    setToken(tokenResponse?.accessToken);
    store.dispatch(setUserData(tokenResponse.account));
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
