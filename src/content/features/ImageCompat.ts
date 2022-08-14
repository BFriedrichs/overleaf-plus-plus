import { getAsset } from '../bridge';
import { getRawFileTreeManager } from '../managers/fileTree';
import { onFileSelected } from '../state';
import { getFileUrl, waitFor } from '../util';

let cache: Record<string, HTMLElement> = {};
let _origRecalculateDocList: () => void;

const fetchBase64 = async (src: string) => {
  const response = await fetch(src);
  const blob = await response.blob();
  const reader = new FileReader();
  await new Promise((resolve, reject) => {
    reader.onload = resolve;
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  if (!reader.result) {
    return;
  }
  return (reader.result as string).replace(/^data:.+;base64,/, '');
};

export const createCompatImageElement = async (
  src: string,
  filename?: string
): Promise<HTMLElement> => {
  if (src in cache) {
    return cache[src];
  }

  let element: HTMLImageElement | HTMLEmbedElement;

  const checkName = filename ?? src;
  let ext = 'png';
  if (checkName.includes('.')) {
    const extSplit = checkName.split('.');
    ext = extSplit[extSplit.length - 1];
  } else {
    src = getAsset('notfound');
  }
  switch (ext) {
    case 'svg': {
      element = document.createElement('img');
      const svg = await fetchBase64(src);
      element.src = `data:image/svg+xml;base64,${svg}`;
      break;
    }
    case 'pdf': {
      element = document.createElement('embed');
      const pdf = await fetchBase64(src);
      element.src = `data:application/pdf;base64,${pdf}#toolbar=0&navpanes=0`;
      break;
    }
    default:
      element = document.createElement('img');
      element.src = src;
  }
  element.classList.add(`opp-compat-${ext}`);

  cache[src] = element;
  return element;
};

export const initialiseImageCompatibility = async () => {
  const treeManager = getRawFileTreeManager();
  _origRecalculateDocList = treeManager.recalculateDocList;
  treeManager.recalculateDocList = () => {
    // Reset cache every time files change
    // This is to ensure that if files are renamed we dont keep old references
    // There is probably a more efficient way to handle this
    cache = {};
    _origRecalculateDocList.apply(treeManager);
  };

  onFileSelected(async (evt, file) => {
    const extSplit = file.name.split('.');
    const ext = extSplit[extSplit.length - 1];
    if (extSplit.length > 1 && ext !== 'svg' && ext !== 'pdf') {
      return;
    }
    const preview = await waitFor(
      () => document.getElementsByClassName('no-preview')[0]
    );

    const compatImage = await createCompatImageElement(
      getFileUrl(file.id),
      file.name
    );

    preview.replaceWith(compatImage);
  });
};
