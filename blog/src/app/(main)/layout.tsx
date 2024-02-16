import type { Metadata } from 'next';
import '@/styles/globals.css';
import Favicon from '@/app/favicon.ico';

export const metadata: Metadata = {
  title: '김희제의 기술 블로그',
  description: '내 맘대로 개발 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={'px-4 min-h-screen mx-auto max-w-[640px]'}>{children}</main>
    </>
  );
}
