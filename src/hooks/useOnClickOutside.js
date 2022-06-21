import React from 'react';

export function useOnClickOutside(ref, handler) {
  React.useEffect(
    () => {
      const listener = (e) => {
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
        handler(e);
      };
      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    },   
    [ref, handler]
  );
}