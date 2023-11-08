import '../styles/globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Head from 'next/head';
import { pretendard } from '@/styles/fonts';
import Providers from '@/app/providers';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <main className={'px-4 mx-auto max-w-[640px]'}>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
