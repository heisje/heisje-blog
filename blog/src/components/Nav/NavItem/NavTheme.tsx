'use client';
import { FiDisc, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import styles from '@/components/Nav/Nav.module.css';
import useMounted from '@/hook/useMounted';
import { NavBar } from '@/components/Nav/NavBar';
import { useState } from 'react';

type ThemeType = 'light' | 'dark' | 'system';

export const NavTheme = ({ type }: { type: 'light' | 'dark' | 'system' }) => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  const Icons = {
    light: FiSun,
    dark: FiMoon,
    system: FiDisc,
  };

  const Icon = Icons[type];

  return (
    <li
      onClick={() => setTheme(type)}
      className={`h-8 ${styles.boxLi} ${styles.icon} ${isMounted && type === theme ? styles.activeLink : ''}`}
      id={`${type}-nav-button`}
    >
      <div>
        <Icon size={'20'} />
      </div>
    </li>
  );
};

export const NavThemeReactive = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();
  const [isActive, setIsActive] = useState(false);

  const Icons = {
    light: FiSun,
    dark: FiMoon,
    system: FiDisc,
  };

  const Icon = isMounted && theme ? Icons[theme as ThemeType] : Icons['system'];

  return (
    <li
      className={`h-8 flex justify-center items-center hover:text-primary-500 cursor-pointer`}
      id={`search-nav-button`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={` ${isActive ? 'block' : 'hidden'}`}>
        <NavBar>
          <NavTheme type={'light'} />
          <NavTheme type={'dark'} />
          <NavTheme type={'system'} />
        </NavBar>
      </div>
      <div>{Icon && <Icon size={'20'} />}</div>
    </li>
  );
};
