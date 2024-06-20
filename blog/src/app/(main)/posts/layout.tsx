import type { Metadata } from 'next';
import '@/styles/globals.css';
import Favicon from '@/app/favicon.ico';
import React from 'react';

export const metadata: Metadata = {
  title: '김희제의 기술 블로그',
  description: '내 맘대로 개발 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/*블로그 소개글*/}
      {/*<header className={'flex h-48 items-center border border-c-gray-500/20 rounded-xl'}>*/}
      {/*  <div className="mx-auto text-3xl font-extrabold">*/}
      {/*    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">*/}
      {/*      김희제의 개발 포스팅*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</header>*/}

      {children}
    </section>
  );
}
