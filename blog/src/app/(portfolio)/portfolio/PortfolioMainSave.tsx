'use client';
import React, { useEffect, useRef, useState } from 'react';
import style from './Logo.module.css';
import Lottie from 'react-lottie-player';
import lottieJson from '@public/assets/lottie/background-pattern.json';
// import lottieJson from '@public/assets/lottie/Animation-1719564590216.json';
import { FiArrowDown } from 'react-icons/fi';

// https://blog.olivierlarose.com/tutorials/text-clip-mask-on-scroll
const PortfolioMain = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [animationPosition, setAnimationPosition] = useState(0);

  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const easedScrollProgress = useRef(0);

  const initialMaskSize = 1;
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
  }, [container, stickyMask, totalFrames]);

  return (
    <>
      <main ref={scrollRef} className={`${style.main}`}>
        <div ref={container} className={style.container}>
          <div ref={stickyMask} className={style.stickyMask}>
            <Lottie
              className={`h-full ${style.lottie}`}
              goTo={animationPosition}
              animationData={lottieJson}
              play={true}
              loop
            />

            {/*<video autoPlay muted loop>*/}
            {/*  */}
            {/*  <source src="/medias/nature.mp4" type="video/mp4" />*/}
            {/*</video>*/}
          </div>
          {/*<div className={'fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-10'}>*/}
          {/*  <div className={'bg-white/20 backdrop-blur-sm sticky w-3/4 rounded-2xl h-96'}>About</div>*/}
          {/*</div>*/}
        </div>

        <div className={'animate-bounce z-10 sticky mx-auto center bottom-8 flex justify-center'}>
          <div className={'p-1 bg-blue-500'}>
            <FiArrowDown size={16} />
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioMain;
