'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import useMounted from '@/hook/useMounted';

const TEXTS = ['10', 'j'];

const NavLogo = () => {
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
  );
};

export default NavLogo;
