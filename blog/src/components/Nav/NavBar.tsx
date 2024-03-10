'use client';

import styles from './Nav.module.css';
import { ReactNode } from 'react';

/**
 * 네비검색
 * @param
 * @constructor
 */
export const NavBar = ({ children }: { children: ReactNode }) => {
  return <ul className={`${styles.boxUl} mr-2`}>{children}</ul>;
};
