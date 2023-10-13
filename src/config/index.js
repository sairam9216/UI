/* eslint-disable no-undef */
export const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const SHAREPOINT_BASE_URL = process.env.REACT_APP_SHAREPOINT_BASE_URL;

export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_MSAL_CLIENT_ID,
    authority: process.env.REACT_APP_MSAL_AUTHORITY, // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    navigateToLoginRequestUrl: false,
    redirectUri: process.env.REACT_APP_MSAL_REDIRECT_URL
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: [process.env.REACT_APP_MSAL_API_SCOPE_URL, 'User.Read'],
  prompt: 'select_account'
};

export const getCustomLoginRequest = (email = '') => {
  let scopes = [process.env.REACT_APP_MSAL_API_SCOPE_URL, 'User.Read'];
  if (email) {
    return {
      scopes,
      loginHint: email
    };
  } else {
    return {
      scopes,
      prompt: 'select_account'
    };
  }
};
