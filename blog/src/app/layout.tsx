import '../styles/globals.css';
import type { Metadata } from 'next';
import Head from 'next/head';
import Favicon from './favicon.ico';
import { Pretendard } from '@/app/_fonts/localFonts';
import Providers from '@/app/providers';

export const metadata: Metadata = {
  title: '김희제의 기술 블로그',
  description: '내 맘대로 개발 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className}`}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
