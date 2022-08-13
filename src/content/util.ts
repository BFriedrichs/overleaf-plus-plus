export const waitForElement = async (
  selector: () => Element
): Promise<HTMLElement> => {
  let interval: number;
  return new Promise((resolve) => {
    const element = selector();
    if (element) {
      resolve(element as HTMLElement);
      return;
    }
    interval = setInterval(() => {
      const element = selector();
      if (element) {
        clearInterval(interval);
        resolve(element as HTMLElement);
      }
    }, 1000);
  });
};

export const debug = (...args: any[]) => {
  console.log('[O++]: ', ...args);
};
