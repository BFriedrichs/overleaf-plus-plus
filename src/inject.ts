import { AssetURLs, OPPEvent } from './shared';
import { getValues, OPPStorage } from './storage';

const _sendReplyTo =
  (channel: string) =>
  <T>(data: T) => {
    window.dispatchEvent(
      new CustomEvent('opp-receive-message', { detail: { channel, data } })
    );
  };

const onCommunication = async (
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
    case 'getSettings': {
      const settings = await getValues(null);
      sendReply<OPPStorage>(settings);
      break;
    }
  }
};

window.addEventListener('opp-send-message', async (evt) => {
  const { detail } = evt as OPPEvent;
  await onCommunication(
    detail.channel,
    detail.data,
    _sendReplyTo(detail.channel)
  );
});

const scriptTag = document.createElement('script');
scriptTag.src = chrome.runtime.getURL('assets/content.js');
scriptTag.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(scriptTag);

export {};
