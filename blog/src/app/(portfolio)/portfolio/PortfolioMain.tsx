'use client';
import React, { useEffect, useRef, useState } from 'react';
import style from './Logo.module.css';
import Lottie from 'react-lottie-player';
// import lottieJson from '@public/assets/lottie/background-pattern.json';
import lottieJson from '@public/assets/lottie/Animation-1719564590216.json';

// https://blog.olivierlarose.com/tutorials/text-clip-mask-on-scroll
const PortfolioMain = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [animationPosition, setAnimationPosition] = useState(0);

  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const easedScrollProgress = useRef(0);

  const initialMaskSize = 0.5;
  const targetMaskSize = 200;
  const easing = 0.15;
  const totalFrames = lottieJson.op; // 애니메이션의 총 프레임 수

  useEffect(() => {
    const getScrollProgress = () => {
      if (!stickyMask.current || !container.current) return easedScrollProgress.current;

      const height: DOMRect = container.current.getBoundingClientRect();

      const scrollProgress = stickyMask.current.offsetTop / (height.height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress.current;
      easedScrollProgress.current += delta * easing;
      return easedScrollProgress.current;
    };

    const animate = () => {
      if (!stickyMask.current) return;

      const easedScrollProgress = getScrollProgress(); // 스크롤 델타값
      const maskSizeProgress = targetMaskSize * easedScrollProgress;
      stickyMask.current.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + '%';

      setAnimationPosition(easedScrollProgress * totalFrames);
      requestAnimationFrame(animate);
    };
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [container, stickyMask]);

  return (
    <>
      <main ref={scrollRef} className={style.main}>
        <div ref={container} className={style.container}>
          <div ref={stickyMask} className={style.stickyMask}>
            <Lottie className={`h-full ${style.lottie}`} goTo={animationPosition} animationData={lottieJson} />

            {/*<video autoPlay muted loop>*/}
            {/*  */}
            {/*  <source src="/medias/nature.mp4" type="video/mp4" />*/}
            {/*</video>*/}
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioMain;
