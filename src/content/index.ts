import inlineStyles from './styles.css?raw';

import createFileDrop from './features/FileDrop';
import { initApplicationState } from './state';

const styleTag = document.createElement('style');
styleTag.innerHTML = inlineStyles;
document.head.appendChild(styleTag);

(async () => {
  await initApplicationState();
  await createFileDrop();
})();
