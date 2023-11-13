import '../styles/globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Head from 'next/head';
import { pretendard } from '@/styles/fonts';
import Providers from '@/app/providers';
import Footer from '@/components/Footer';
import Favicon from './favicon.ico';

export const metadata: Metadata = {
  title: '김희제의 기술 블로그',
  description: '내 맘대로 개발 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <Providers>
          <Nav className={'px-4 mx-auto max-w-[640px]'} />
          <main className={'px-4 min-h-screen mx-auto max-w-[640px]'}>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
