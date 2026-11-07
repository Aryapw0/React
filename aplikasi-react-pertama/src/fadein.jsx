import { useEffect, useRef, useState } from 'react';

export default function fadein(threshold = 0.3) {
  const ref = useRef(null);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
      const el = ref.current;
      if (!el) return;
      
    const observer = new IntersectionObserver(
      ([entry]) => setTampil(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, tampil];
}