'use client';

import styles from './Nav.module.css';
import { HTMLAttributes, ReactNode } from 'react';

interface NavBarProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const NavBar = ({ className, children, ...rest }: NavBarProps) => {
  return (
    <ul className={`${className} ${styles.boxUl} mr-2`} {...rest}>
      {children}
    </ul>
  );
};
