import { useEffect, useRef } from 'react';

export const useAutoResize = (value) => {
  
  const maxWidth = 300
  const baseWidth = 120
  const charThreshold = 30
  

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const textLength = value.length;

      if (textLength <= charThreshold) {
        ref.current.style.width = `${baseWidth}px`;
        ref.current.style.height = "auto";
      } else if (textLength > charThreshold) {
        const newWidth = Math.min(
          baseWidth + (textLength - charThreshold) * 8,
          maxWidth
        );
        ref.current.style.width = `${newWidth}px`;

        if (newWidth >= maxWidth) {
          ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
      }
    }
  }, [value, maxWidth, baseWidth, charThreshold]);

  return ref;
};