import { Overleaf } from '../overleaf-types';
import { getApplicationState } from '../state';

export const getAceManager = () => {
  return getApplicationState().$scope.editor.sharejs_doc.ace;
};

export const onDocumentChanged = (
  cb: (e: Overleaf.Editor.ChangeEvent) => void
) => {
  return getAceManager().on('change', cb);
};

export const onTextHover = (
  cb: (
    result: {
      position: { row: number; column: number };
      text: string;
    },
    originalEvent: MouseEvent
  ) => void
) => {
  const aceManager = getAceManager();
  aceManager.on('mousemove', (e) => {
    const position = aceManager.renderer.screenToTextCoordinates(
      e.clientX,
      e.clientY
    );
    cb(
      {
        position,
        text: aceManager.session.getLine(position.row),
      },
      e
    );
  });
};

export const getLineElement = (row: number): HTMLElement => {
  return getAceManager().renderer.$textLayer.$lines.cells[row].element;
};
