export type OPPStorage = {
  fileDropEnabled: boolean;
  imageCompatEnabled: boolean;
  peekPreviewEnabled: boolean;
};

export const setValue = async <T extends keyof OPPStorage>(
  key: T,
  value: OPPStorage[T]
): Promise<void> => {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, () => {
      resolve();
    });
  });
};

export const getValues = async <T extends keyof OPPStorage>(
  keys: T[] | null
): Promise<Record<T, OPPStorage[T]>> => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(keys, (result) => {
      resolve(result as Record<T, OPPStorage[T]>);
    });
  });
};

export const getValue = async <T extends keyof OPPStorage>(
  key: T
): Promise<OPPStorage[T]> => {
  const values = await getValues<T>([key]);
  return values[key];
};
