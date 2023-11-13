'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function Providers({ children }: Props) {
  const STORAGE_KEY = 'theme';
  // const THEMES = ['light', 'dark'] as const;
  const DEFAULT_THEME = 'system';

  return (
    <ThemeProvider attribute={'class'} storageKey={STORAGE_KEY} defaultTheme={DEFAULT_THEME}>
      {children}
    </ThemeProvider>
  );
}
