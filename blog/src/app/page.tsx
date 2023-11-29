'use client';
import { Suspense, useEffect, useState, useRef } from 'react';
import localFont from 'next/font/local';
import { HomeHeader } from '@/app/HomeComponents';

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// const Delay = async () => {
//   await delay(5000);
//   console.log('끝');
//   // 상태를 업데이트하거나 렌더링 로직을 여기에 추가합니다.
//   return <div>끝</div>;
// };
const myFont = localFont({ src: 'fonts/stretchpro.otf' });

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const goButton = useRef<HTMLDivElement | null>(null);

  const [goButtonPosition, setGoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // const x = goButton !== null ? goButton.current.offsetLeft ;
    // const y = goButton || goButton.current.offsetTop;
    if (goButton && goButton.current) {
      const boxRect = goButton.current.getBoundingClientRect();
      setGoButtonPosition({ x: boxRect.width / 2, y: boxRect.height / 2 });
    }
  }, [goButton]);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={'px-4 min-h-screen mx-auto max-w-[640px]'}>
      <HomeHeader />
      <Suspense fallback={<div className={`w-full h-full bg-blue-500`}>로딩중</div>}>
        <div className={`w-full h-screen`}>Developer HEEJE{"'"}S BLOG</div>

        {/*<div className={'relative w-full h-screen bg-blue-500'}>*/}
        {/*  <div className={`absolute block border-2 border-black bg-red-400 w-80 h-80 rounded-full`} ref={goButton}>*/}
        {/*    {JSON.stringify(mousePos)}*/}
        {/*    {JSON.stringify(goButtonPosition)}*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    className={`absolute block border-2 border-black w-80 h-80 rounded-full`}*/}
        {/*    style={{ transform: `translate(${mousePos.x / 10}px, ${mousePos.y / 10}px)` }}*/}
        {/*  >*/}
        {/*    {JSON.stringify(mousePos)}*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    className={`absolute block border-2 border-black w-80 h-80 rounded-full`}*/}
        {/*    style={{ transform: `translate(${mousePos.x / 7}px, ${mousePos.y / 7}px)` }}*/}
        {/*  >*/}
        {/*    {JSON.stringify(mousePos)}*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    className={`absolute block border-2 border-black w-80 h-80 rounded-full`}*/}
        {/*    style={{ transform: `translate(${mousePos.x / 8}px, ${mousePos.y / 8}px)` }}*/}
        {/*  >*/}
        {/*    {JSON.stringify(mousePos)}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Suspense>
    </section>
  );
}
