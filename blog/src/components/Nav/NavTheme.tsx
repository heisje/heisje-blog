'use client';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from '@/components/Nav/Nav.module.css';

const NavTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <ul className={styles.box20}>
      <li
        onClick={() => setTheme('light')}
        className={`${theme !== 'dark' ? styles.activeLink : ''} inline-block ${styles.box41} h-8`}
      >
        <div className={'flex h-full items-center'}>
          <FiSun size={'20'} />
        </div>
      </li>

      <li
        onClick={() => setTheme('dark')}
        className={`${theme === 'dark' ? styles.activeLink : ''} inline-block ${styles.box41} h-8`}
      >
        <div className={'flex h-full items-center'}>
          <FiMoon size={'20'} />
        </div>
      </li>
    </ul>
  );
};

export default NavTheme;
