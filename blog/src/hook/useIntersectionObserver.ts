import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({ threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold, // 10%가 화면에 보일 때 트리거됩니다.
      },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return { ref: targetRef };
};

export default useIntersectionObserver;
