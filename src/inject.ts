import { AssetURLs, OPPEvent } from './shared';

const _sendReplyTo =
  (channel: string) =>
  <T>(data: T) => {
    window.dispatchEvent(
      new CustomEvent('opp-receive-message', { detail: { channel, data } })
    );
  };

const onCommunication = (
  channel: string,
  data: Record<string, unknown> | undefined,
  sendReply: ReturnType<typeof _sendReplyTo>
) => {
  switch (channel) {
    case 'getAssetURLs':
      sendReply<AssetURLs>({
        notfound: chrome.runtime.getURL('images/notfound.png'),
      });
      break;
  }
};

window.addEventListener('opp-send-message', ((evt: OPPEvent) => {
  onCommunication(
    evt.detail.channel,
    evt.detail.data,
    _sendReplyTo(evt.detail.channel)
  );
}) as EventListener);

const scriptTag = document.createElement('script');
scriptTag.src = chrome.runtime.getURL('assets/content.js');
scriptTag.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(scriptTag);

export {};
