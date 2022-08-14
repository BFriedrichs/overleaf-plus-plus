import { Overleaf } from './overleaf-types';
import { debug, waitFor } from './util';

declare const window: Overleaf.OverleafWindow;

let applicationState: Overleaf.State;

export const initApplicationState = async () => {
  await waitFor(() => window._ide?.$scope?.state?.loading === false);
  applicationState = window._ide;
};

export const getApplicationState = () => {
  return applicationState;
};

export const getData = () => {
  return window.data;
};
