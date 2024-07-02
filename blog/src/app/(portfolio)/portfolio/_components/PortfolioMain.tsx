'use client';
import React, { useEffect, useRef, useState } from 'react';
import style from './Logo.module.css';
import Lottie from 'react-lottie-player';
// import lottieJson from '@public/assets/lottie/background-pattern.json';
import lottieJson from '@public/assets/lottie/Animation-1719564590216.json';
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

      setAnimationPosition(Math.min(easedScrollProgress * totalFrames, totalFrames - 0.01));
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
          <div ref={stickyMask} className={`${style.stickyMask}`}>
            <Lottie className={`h-full ${style.lottie}`} goTo={animationPosition} animationData={lottieJson} />

            {/*<video autoPlay muted loop>*/}
            {/*  */}
            {/*  <source src="/medias/nature.mp4" type="video/mp4" />*/}
            {/*</video>*/}
          </div>
          <div className={'sticky top-0 left-0 w-full h-screen flex justify-center items-center p-2'}>
            <div className={'bg-white/30 dark:bg-black/30 backdrop-blur-sm max-w-2xl w-full rounded-2xl h-96 relative'}>
              <div className={'absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden'}>
                <video className={style.video} autoPlay muted loop>
                  <source src="/medias/EmojiMovie741318895.mp4" type="video/mp4" />
                </video>
              </div>
              <div
                className={
                  'pt-12 pb-2 w-full h-full flex flex-col items-center px-2 text-center dark:text-c-gray-50 text-c-gray-950'
                }
              >
                <h4>About</h4>
                <h2>개발자 김희제</h2>
                <p className={'mt-2 dark:text-c-gray-100 text-c-gray-900'}>
                  더 편한, 더 참신한
                  <br /> 상상을 하고 직접 만드는 <span className={'font-bold'}>개발자</span>입니다.
                  <br />
                  <br /> UI/UX디자이너로 2년간 일했습니다.
                  <br /> 사용자 데이터로 더 좋은 서비스를 만들려다,
                  <br /> 직접 개발하는 매력에 빠졌습니다.
                </p>
                <ul className={'mt-auto flex gap-3 dark:text-c-gray-100 text-c-gray-900'}>
                  <li>#사용자</li>
                  <li>#피드백</li>
                  <li>#분석</li>
                  <li>#UI/UX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={'animate-bounce z-10 sticky mx-auto center bottom-8 flex justify-center'}>
          <div className={'p-1 bg-blue-500 text-whiteZ'}>
            <FiArrowDown size={16} />
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioMain;
