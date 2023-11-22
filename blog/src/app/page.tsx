'use client';
import { Suspense } from 'react';

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// const Delay = async () => {
//   await delay(5000);
//   console.log('끝');
//   // 상태를 업데이트하거나 렌더링 로직을 여기에 추가합니다.
//   return <div>끝</div>;
// };

export default function Example() {
  return (
    <Suspense fallback={<div className={'w-full h-full bg-blue-500'}>로딩중</div>}>
      {/*<Delay />*/}
      <div className={'test flex h-48 items-center'}>
        <div className="mx-auto text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            김희제의 개발 블로그
          </span>
        </div>
      </div>
    </Suspense>
  );
}
