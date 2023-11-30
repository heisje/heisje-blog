'use client';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import useMounted from '@/hook/useMounted';

const TEXTS = ['10', 'j'];

const NavLogo = () => {
  const [index, setIndex] = React.useState(0);
  const { isMounted } = useMounted();
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      15000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
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
