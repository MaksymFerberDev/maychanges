import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void, toggleRef: RefObject<HTMLElement>) => {
  const domNode = useRef<HTMLElement>(null);

  useEffect(() => {
    const modalHandler = (event: MouseEvent) => {
      if (
        domNode.current &&
        !domNode.current.contains(event.target as Node) &&
        (!toggleRef.current || !toggleRef.current.contains(event.target as Node))
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', modalHandler);

    return () => {
      document.removeEventListener('mousedown', modalHandler);
    };
  }, [handler, toggleRef]);

  return domNode;
};
