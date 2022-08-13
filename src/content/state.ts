import { debug } from './util';

interface overleafWindow extends Window {
  _ide: OverleafState;
  data: OverleafData;
}

declare const window: overleafWindow;

let applicationState: OverleafState;

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

export const getRootFolder = () => {
  return applicationState.outlineManager.scope.project.rootFolder[0];
};

export const findFileFolderId = (
  fileId: string,
  folder: OverleafFolder = getRootFolder()
): string | undefined => {
  const { folders = [], fileRefs = [], docs = [] } = folder;
  const children: { _id: string }[] = [...folders, ...fileRefs, ...docs];
  const foundChild = children.find((child) => {
    child._id === fileId;
  });
  if (foundChild) {
    // If it's a direct child return current folder
    return folder._id;
  }
  for (const subFolder of folders) {
    // search all sub folders for a match
    const foundSubChildId = findFileFolderId(fileId, subFolder);
    if (foundSubChildId) {
      return foundSubChildId;
    }
  }
  return folder._id;
};

export const getData = () => {
  return window.data;
};
