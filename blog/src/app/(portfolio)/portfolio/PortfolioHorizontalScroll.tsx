'use client';
// HorizontalScrollComponent.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './ho.module.css';

const HorizontalScrollComponent = () => {
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const scrollTopRef = useRef<number>(null);

  const [scrollBoxOffsetTop, setScrollBoxOffsetTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBoxRef.current) {
        const rect = scrollBoxRef.current.getBoundingClientRect();
        // const transformX = (-1 / 18) * window.scrollY + rect.top / 18;

        const transformX = +window.scrollY;

        // if (rect.top == 0) {
        //   scrollBoxRef.current.style.transform = 'translateX(-100vw)';
        // } else if (rect.top < 0) {
        //   scrollBoxRef.current.style.transform = `translateX(${transformX}vw)`;
        // }
      }
    };
    if (scrollBoxRef.current) {
      setScrollBoxOffsetTop(scrollBoxRef.current.offsetTop);
      console.log(scrollBoxOffsetTop);
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollBox} ref={scrollBoxRef}>
      <div className="item">{scrollBoxOffsetTop}</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
      {/* Add more items as needed */}
    </div>
  );
};

export default HorizontalScrollComponent;
