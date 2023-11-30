import '../styles/globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Head from 'next/head';
import Providers from '@/app/providers';
import Footer from '@/components/Footer';
import Favicon from './favicon.ico';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: '김희제의 기술 블로그',
  description: '내 맘대로 개발 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

const PretendardVariableWoff2 = localFont({ src: 'fonts/PretendardVariable.woff2' });

const Pretendard = localFont({
  src: [
    {
      path: 'fonts/Pretendard-Thin.woff2',
      weight: '100',
    },
    {
      path: 'fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: 'fonts/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: 'fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: 'fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: 'fonts/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: 'fonts/Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: 'fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: 'fonts/Pretendard-Black.woff2',
      weight: '900',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className}`}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
