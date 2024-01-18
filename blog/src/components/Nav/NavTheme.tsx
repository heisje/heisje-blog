'use client';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import styles from '@/components/Header/Nav.module.css';
import useMounted from '@/hook/useMounted';

export const NavTheme = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  return (
    <ul className={styles.boxUl}>
      <li
        onClick={() => setTheme('light')}
        className={`h-8 ${styles.boxLi} ${styles.icon} ${isMounted && theme !== 'dark' ? styles.activeLink : ''}`}
      >
        <div>
          <FiSun size={'20'} />
        </div>
      </li>
      <li
        onClick={() => setTheme('dark')}
        className={`h-8 ${styles.boxLi} ${styles.icon} ${isMounted && theme === 'dark' ? styles.activeLink : ''}`}
      >
        <div>
          <FiMoon size={'20'} />
        </div>
      </li>
    </ul>
  );
};
