'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}
export default function Providers({ children }: Props) {
  // const [mounted, setMounted] = useState(false);
  //
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  //
  // if (!mounted) {
  //   return <>{children}</>;
  // }
  const STORAGE_KEY = 'theme';
  const THEMES = ['light', 'dark'] as const;
  const DEFAULT_THEME = 'system';

  return (
    <ThemeProvider attribute={'class'} storageKey={STORAGE_KEY} themes={['light', 'dark']}>
      {children}
    </ThemeProvider>
  );
}
