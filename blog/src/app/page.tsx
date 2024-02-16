'use client';
import { Suspense, useEffect, useState, useRef } from 'react';
import { HomeHeader } from '@/app/_components/HomeComponents';

export default function HomePage() {
  return (
    <section className={'px-4 min-h-screen mx-auto max-w-[640px]'}>
      <HomeHeader />
      <Suspense fallback={<div className={`w-full h-full bg-blue-500`}>로딩중</div>}>
        <div className={`w-full h-screen`}>Developer HEEJE{"'"}S BLOG</div>
      </Suspense>
    </section>
  );
}
