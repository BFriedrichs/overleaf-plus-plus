import { getLineElement, onTextHover } from '../managers/editor';
import { findEntityByPath } from '../managers/fileTree';
import { getApplicationState } from '../state';
import { getAsset } from '../bridge';

let lastLine: number;
const popup = document.createElement('div');
const preview = document.createElement('img');
popup.appendChild(preview);

export const initialisePreview = async () => {
  const applicationState = getApplicationState();
  popup.classList.add('opp-hoverer-popup');
  document.body.appendChild(popup);

  onTextHover(({ position, text }, originalEvent) => {
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
    element.classList.add('opp-hovered-line');
    popup.style.display = 'block';
    const projectId = applicationState.project_id;
    const foundFile = findEntityByPath(imagePath);

    let url = getAsset('notfound');
    if (foundFile) {
      url = `https://sharelatex.cs.cf.ac.uk/project/${projectId}/file/${foundFile.id}`;
    }
    if (preview.src != url) {
      preview.src = url;
    }
  });
};
