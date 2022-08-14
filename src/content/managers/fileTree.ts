import { Overleaf } from '../overleaf-types';
import { FolderFileEntity } from '../overleaf-types/files';
import { getApplicationState } from '../state';

export const getRawFileTreeManager = () => {
  const applicationState = getApplicationState();
  return applicationState.fileTreeManager;
};

export const getRootFolder = (): FolderFileEntity => {
  return getApplicationState().$scope.rootFolder;
};

export const findEntityById = (id: string) => {
  return getRawFileTreeManager().findEntityById(id);
};

export const findEntityByPath = (path: string) => {
  return getRawFileTreeManager().findEntityByPath(path);
};

export const findParentFolder = (id: string) => {
  const treeManager = getRawFileTreeManager();
  const entity = findEntityById(id);
  if (!entity) {
    return;
  }
  return treeManager._findParentFolder(entity);
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
