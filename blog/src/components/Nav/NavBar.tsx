'use client';

import { getSearchPosts, searchPostsType } from '@/utils/posts';
import { NavSearchLink } from '@/components/OldNav/NavSearchLink';
import styles from './Nav.module.css';
import { NavRouteItem } from '@/components/OldNav/NavRouteItem';
import { ReactNode } from 'react';

/**
 * 네비검색
 * @param
 * @constructor
 */
export const NavBar = ({ children }: { children: ReactNode }) => {
  return <ul className={`${styles.boxUl} mr-2`}>{children}</ul>;
};
