import { AssetURLs, OPPEvent } from '../shared';
import { OPPStorage } from '../storage';

const pendingMessages: Record<string, ((response: any) => void)[]> = {};
export let assetURLs: AssetURLs;
export let settings: OPPStorage;

export const sendMessage = async <T>(
  channel: string,
  data?: any
): Promise<T> => {
  return new Promise((resolve) => {
    pendingMessages[channel] = pendingMessages[channel] ?? [];
    pendingMessages[channel].push((response) => {
      resolve(response);
    });
    window.dispatchEvent(
      new CustomEvent('opp-send-message', { detail: { channel, data } })
    );
  });
};

export const initialiseBridge = async () => {
  window.addEventListener('opp-receive-message', ((evt: OPPEvent) => {
    const { [evt.detail.channel]: listeners = [] } = pendingMessages;
    listeners.forEach((l) => {
      l(evt.detail.data);
    });
    pendingMessages[evt.detail.channel] = [];
  }) as EventListener);

  assetURLs = await sendMessage('getAssetURLs');
  settings = await sendMessage('getSettings');
};

export const getAsset = (name: keyof AssetURLs) => {
  return assetURLs[name];
};
