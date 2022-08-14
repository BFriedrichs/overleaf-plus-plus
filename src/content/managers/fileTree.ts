import { Overleaf } from '../overleaf-types';
import { getApplicationState } from '../state';

export const getRawFileTreeManager = () => {
  const applicationState = getApplicationState();
  return applicationState.fileTreeManager;
};

export const getRootFolder = () => {
  return getRawFileTreeManager().getCurrentFolder();
};

export const findEntityById = (id: string) => {
  return getRawFileTreeManager().findEntityById(id);
};

export const findParentFolder = (id: string) => {
  const treeManager = getRawFileTreeManager();
  return treeManager._findParentFolder(findEntityById(id));
};

export const onFileUploaded = (
  toFolder: string,
  fileRef: Overleaf.File.Internal.FileRef
) => {
  const applicationState = getApplicationState();
  const treeManager = getRawFileTreeManager();
  const parent = treeManager.findEntityById(toFolder) || getRootFolder();
  applicationState.$apply(() => {
    parent.children?.push({
      name: fileRef.name,
      id: fileRef._id,
      type: 'file',
      linkedFileData: null,
      created: fileRef.created,
    });
    treeManager.recalculateDocList();
  });
};
