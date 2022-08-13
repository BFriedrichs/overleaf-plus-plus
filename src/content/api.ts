import { getData } from './state';

export const makeRequest = (url: string, options: RequestInit = {}) => {
  const overleafData = getData();
  options.headers = {
    'X-CSRF-TOKEN': overleafData.csrfToken,
  };

  return fetch(url, options);
};

export const get = (url: string, options: RequestInit = {}) => {
  return makeRequest(url, { ...options, method: 'GET' });
};

export const post = (url: string, options: RequestInit = {}) => {
  return makeRequest(url, { ...options, method: 'POST' });
};
