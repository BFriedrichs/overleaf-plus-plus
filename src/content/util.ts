import { getApplicationState } from './state';

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
    }, 300);
  });
};

export const debug = (...args: any[]) => {
  console.log('[O++]: ', ...args);
};

export const getFileUrl = (fileId: string) => {
  const applicationState = getApplicationState();
  const projectId = applicationState.project_id;
  return `${window.location.origin}/project/${projectId}/file/${fileId}`;
};
