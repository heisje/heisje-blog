import type { Metadata } from 'next';
import '@/styles/globals.css';
import Favicon from '@/app/favicon.ico';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '김희제의 기술 블로그',
  description: '내 맘대로 개발 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={`px-4 min-h-screen mx-auto max-w-[1024px]`}>{children}</main>
      <Footer />
    </>
  );
}
