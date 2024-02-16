'use client';
import React, { useEffect, useRef } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import useMounted from '@/hook/useMounted';
import Link from 'next/link';

const TEXTS = ['10', 'j'];

export const Logo = () => {
  const [index, setIndex] = React.useState(0);
  const { isMounted } = useMounted();
  const intervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startInterval = () => {
      intervalId.current = setInterval(() => setIndex((index) => index + 1), 5000);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startInterval();
      } else {
        clearInterval(intervalId.current);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    startInterval();

    return () => {
      clearInterval(intervalId.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Link className={'block text-xl font-light transition hover:opacity-50'} href={'/'}>
      <div className={'font-medium text-primary-500 dark:text-primary-400'}>
        <span>{'<h'}</span>
        <span className={'inline-block'}>
          {isMounted ? (
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
          ) : (
            '10'
          )}
        </span>
        <span>{' />'}</span>
      </div>
    </Link>
  );
};
