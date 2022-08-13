const scriptTag = document.createElement('script');
scriptTag.src = chrome.runtime.getURL('assets/content.js');
scriptTag.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(scriptTag);

export {};
