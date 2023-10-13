import moment from 'moment';
import { useEffect, useState } from 'react';

export const paginationData = {
  pageSize: 20,
  pageNumber: 1
};

export const setToken = (token) => localStorage.setItem('barganingtoken', token);

export const getToken = () => localStorage.getItem('barganingtoken');

export const getSharePointUrl = (url) => {
  //let finalUrl = `${url}&sc=${getToken()}`;
  let finalUrl = `${url}`;
  return finalUrl;
};

export const removeToken = () => {
  localStorage.clear();
  let language = localStorage.getItem('i18nextLng');
  let selectedTheme = localStorage.getItem('selectedTheme');
  localStorage.setItem('i18nextLng', language);

  if (selectedTheme) {
    localStorage.setItem('selectedTheme', selectedTheme);
  } else {
    localStorage.setItem('i18nextLng', 'en');
    localStorage.setItem('selectedTheme', 'default');
  }
};

export const authRedirectCallback = (tokenResponse) => {
  if (tokenResponse) {
    setToken(tokenResponse?.accessToken);
    window.location = '/dashboard';
  }
};

export const getFormatedDate = (dateTime, format = 'MMMM DD, YYYY') => {
  return moment.utc(dateTime).local().format(format);
};

export const getFormatedDateWithTime = (dateTime, format = 'MMMM Do YYYY, h:mm a') => {
  return moment.utc(dateTime).local().format(format);
};

export const getFormatedDateWithoutUtc = (dateTime, format = 'MMMM DD, YYYY') => {
  return moment(dateTime).format(format);
};

export const getSingleCharacter = (char) => {
  return char?.charAt(0);
};

export const getRandomValue = () => {
  const crypto = window.crypto || window.msCrypto;
  let array = new Uint32Array(1);
  let randomValue = crypto.getRandomValues(array);
  return randomValue[0];
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};
