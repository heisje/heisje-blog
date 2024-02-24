'use client';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import styles from '@/components/Nav/Nav.module.css';
import useMounted from '@/hook/useMounted';

export const NavTheme = ({ type }: { type: 'light' | 'dark' }) => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  const Icons = {
    light: FiSun,
    dark: FiMoon,
  };
  const Icon = Icons[type];

  return (
    <li
      onClick={() => setTheme(type)}
      className={`h-8 ${styles.boxLi} ${styles.icon} ${isMounted && type === theme ? styles.activeLink : ''}`}
    >
      <div>
        <Icon size={'20'} />
      </div>
    </li>
  );
};
