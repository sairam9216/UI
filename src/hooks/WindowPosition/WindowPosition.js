import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition() {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
}
