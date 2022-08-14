import { getLineElement, onTextHover } from '../managers/editor';
import { findEntityByPath } from '../managers/fileTree';
import { getAsset } from '../bridge';
import { createCompatImageElement } from './ImageCompat';
import { getFileUrl } from '../util';

let lastLine: number;
const popup = document.createElement('div');

export const initialisePreview = async () => {
  popup.classList.add('opp-hoverer-popup');
  document.body.appendChild(popup);

  onTextHover(async ({ position, text }, originalEvent) => {
    popup.style.left = originalEvent.clientX + 'px';
    popup.style.top = originalEvent.clientY + 'px';
    if (lastLine === position.row) {
      return;
    }

    // Line changed, reset all
    popup.style.display = 'none';
    const currentHighlights =
      document.getElementsByClassName('opp-hovered-line');
    for (const highlight of currentHighlights) {
      highlight.classList.remove('opp-hovered-line');
    }
    lastLine = position.row;

    // Find image path, display popup
    const graphicsMatch = text.match(/\\includegraphics\{([^}]+)\}/);
    if (!graphicsMatch) {
      return;
    }
    const imagePath = graphicsMatch[1];
    const element = getLineElement(position.row);
    if (!element) {
      return;
    }
    element.classList.add('opp-hovered-line');
    popup.style.display = 'block';
    const foundFile = findEntityByPath(imagePath);

    let url = getAsset('notfound');
    if (foundFile) {
      url = getFileUrl(foundFile.id);
    }
    if (popup.childNodes.length > 0) {
      popup.innerHTML = '';
    }

    const compatImage = await createCompatImageElement(url, foundFile?.name);
    popup.appendChild(compatImage);
  });
};
