'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  defaultTheme?: string;
}
export default function Providers({ children, defaultTheme = 'system' }: Props) {
  const STORAGE_KEY = 'theme';

  return (
    <ThemeProvider enableSystem={true} attribute={'class'} storageKey={STORAGE_KEY} defaultTheme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
