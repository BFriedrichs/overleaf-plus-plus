import { debug } from './util';

declare const window: Overleaf.Window;

let applicationState: Overleaf.State;

export const initApplicationState = () => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (window._ide) {
        applicationState = window._ide;
        clearInterval(interval);
        debug('Application state found and set.');
        resolve(true);
      }
    });
  });
};

export const getApplicationState = () => {
  return applicationState;
};

export const getData = () => {
  return window.data;
};
