import inlineStyles from './styles.css?raw';

import createFileDrop from './features/FileDrop';
import { initialisePreview } from './features/GraphicsPreview';
import { initApplicationState } from './state';
import { initialiseBridge } from './bridge';
import { initialiseImageCompatibility } from './features/ImageCompat';

const styleTag = document.createElement('style');
styleTag.innerHTML = inlineStyles;
document.head.appendChild(styleTag);

(async () => {
  await initApplicationState();
  await initialiseBridge();
  await createFileDrop();
  await initialisePreview();
  await initialiseImageCompatibility();
})();
