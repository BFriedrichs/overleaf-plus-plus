export const waitFor = async <T>(selector: () => T): Promise<T> => {
  let interval: number;
  return new Promise((resolve) => {
    const element = selector();
    if (element) {
      resolve(element as T);
      return;
    }
    interval = setInterval(() => {
      const element = selector();
      if (element) {
        clearInterval(interval);
        resolve(element as T);
      }
    }, 1000);
  });
};

export const debug = (...args: any[]) => {
  console.log('[O++]: ', ...args);
};
