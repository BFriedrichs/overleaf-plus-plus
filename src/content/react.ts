type Fiber<T> = {
  memoizedProps: {
    children: {
      props: T;
    };
  };
};

type FiberElement<T> = HTMLElement & {
  [key: string]: Fiber<T>;
};

export const getFiber = <T>(elem: HTMLElement): Fiber<T> | undefined => {
  const foundName = Object.getOwnPropertyNames(elem).filter((name) =>
    name.startsWith('__reactFiber$')
  )[0];

  return foundName ? (elem as FiberElement<T>)[foundName] : undefined;
};

export const getFiberProps = <T>(elem: HTMLElement): T | undefined =>
  getFiber<T>(elem)?.memoizedProps?.children?.props;
