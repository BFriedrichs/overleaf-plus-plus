import { Overleaf } from './overleaf-types';
import { ScopeEventListener } from './overleaf-types/state';
import { waitFor } from './util';

declare const window: Overleaf.OverleafWindow;

let applicationState: Overleaf.State;
const selectedListeners: ScopeEventListener[] = [];

export const initApplicationState = async () => {
  await waitFor(() => window._ide?.$scope?.state?.loading === false);
  await waitFor(() => !!window._ide?.$scope?.editor?.sharejs_doc?.ace);
  applicationState = window._ide;

  applicationState.$scope.$on('entity:selected', (evt, file) => {
    for (const cb of selectedListeners) {
      cb(evt, file);
    }
  });
};

export const getApplicationState = () => {
  return applicationState;
};

export const getData = () => {
  return window.data;
};

export const onFileSelected = (cb: ScopeEventListener) => {
  selectedListeners.push(cb);
};
