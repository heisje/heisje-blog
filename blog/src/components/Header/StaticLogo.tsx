import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export const StaticLogo = () => {
  return (
    <Link className={'block text-xl font-light transition hover:opacity-50'} href={'/'}>
      <div className={'font-medium text-primary-500 dark:text-primary-400'}>{'희제 Devlog'}</div>
    </Link>
  );
};
