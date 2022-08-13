import { post } from '../api';
import { getFiberProps } from '../react';
import { findFileFolderId, getRootFolder } from '../state';
import { debug, waitForElement } from '../util';

type FolderFiberProps = {
  id: string;
};

const findParentItem = (target: HTMLElement) => {
  while (target) {
    if (target.hasAttribute('role')) {
      const attr = target.getAttribute('role');
      if (attr === 'treeitem') {
        console.log('Found target', target);
        return target;
      }
    }
    if (target.classList.contains('file-tree-list')) {
      break;
    }
    target = target.parentElement as HTMLElement;
  }
  return undefined;
};

const attachDragStyling = (fileTree: HTMLElement) => {
  const removeAllHighlights = () => {
    const currentlyHighlighted = document.getElementsByClassName('drag-over');
    if (currentlyHighlighted.length > 0) {
      for (const dragOver of currentlyHighlighted) {
        dragOver.classList.remove('drag-over');
      }
    }
  };

  fileTree.addEventListener('dragenter', (event) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    const treeItem = findParentItem(event.target);
    removeAllHighlights();
    if (treeItem?.nextElementSibling?.tagName == 'UL') {
      treeItem.nextElementSibling.classList.add('drag-over');
    } else if (treeItem?.parentElement?.tagName == 'UL') {
      treeItem.parentElement.classList.add('drag-over');
    } else if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.classList.add('drag-over');
    }
  });
  fileTree.addEventListener('dragend', removeAllHighlights);
  fileTree.addEventListener('drop', removeAllHighlights);
};

const createFileDrop = async () => {
  const fileTree = await waitForElement(
    () => document.getElementsByClassName('file-tree-list')[0]
  );
  attachDragStyling(fileTree);

  document.body.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  fileTree.addEventListener('drop', async (event: DragEvent) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    const { items = [] } = event.dataTransfer ?? {};
    for (const item of items) {
      if (item.kind !== 'file') {
        continue;
      }

      const file = item.getAsFile();
      if (!file) {
        continue;
      }

      const formData = new FormData();
      formData.append('qqfile', file);
      formData.append('relativePath', 'null');
      formData.append('name', file.name);
      formData.append('type', file.type);

      const target = findParentItem(event.target);
      // root folder by default
      let folderId = getRootFolder()._id;
      if (target) {
        const fiberProps = getFiberProps<FolderFiberProps>(target);
        if (fiberProps) {
          console.log('Found fiber', fiberProps);
          const lookupId = findFileFolderId(fiberProps.id);
          if (lookupId) {
            folderId = lookupId;
          }
        }
      }

      const { origin, pathname } = window.location;
      const uploadUrl = origin + pathname + `/upload?folder_id=${folderId}`;
      const result = await post(uploadUrl, {
        body: formData,
      });
      console.log(result);
    }
  });
  debug('Registered file tree drop zone');
};

export default createFileDrop;
