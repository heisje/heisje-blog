'use client';
import styles from '@/components/Nav/Nav.module.css';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const NavTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ul className={`${styles.box20} ml-4`}>
        <li className={`${styles.box30} ${styles.box41} h-8`}>
          <div className={'flex h-full items-center'}>
            <FiSun size={'20'} />
          </div>
        </li>
        <li className={`${styles.box30} ${styles.box41} h-8`}>
          <div className={'flex h-full items-center'}>
            <FiMoon size={'20'} />
          </div>
        </li>
      </ul>
    );
  }

  return (
    <ul className={`${styles.box20} ml-4`}>
      <li
        onClick={() => setTheme('light')}
        className={
          theme !== 'dark'
            ? `${styles.activeLink} ${styles.box30} ${styles.box41} h-8`
            : `${styles.box30} ${styles.box41} h-8`
        }
      >
        <div className={'flex h-full items-center'}>
          <FiSun size={'20'} />
        </div>
      </li>
      <li
        onClick={() => setTheme('dark')}
        className={
          theme === 'dark'
            ? `${styles.activeLink} ${styles.box30} ${styles.box41} h-8`
            : `${styles.box30} ${styles.box41} h-8`
        }
      >
        <div className={'flex h-full items-center'}>
          <FiMoon size={'20'} />
        </div>
      </li>
    </ul>
  );
};

export default NavTheme;
