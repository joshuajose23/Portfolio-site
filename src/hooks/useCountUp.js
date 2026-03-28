import { useEffect, useRef, useState } from "react";

export function useCountUp(target, { delay = 0, duration = 1000 } = {}) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    let rafId = 0;
    let timeoutId = 0;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated) {
            return;
          }

          hasAnimated = true;
          observer.disconnect();

          timeoutId = window.setTimeout(() => {
            const startTime = performance.now();

            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(target * eased));

              if (progress < 1) {
                rafId = window.requestAnimationFrame(animate);
              }
            };

            rafId = window.requestAnimationFrame(animate);
          }, delay);
        });
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [delay, duration, target]);

  return { count, ref };
}
