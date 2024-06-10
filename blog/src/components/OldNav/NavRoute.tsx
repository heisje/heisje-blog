'use client';

import { NavSearchLink } from '@/components/OldNav/NavSearchLink';
import styles from './Nav.module.css';
import { NavRouteItem } from '@/components/OldNav/NavRouteItem';
import { SearchPostsType } from '@/model/post';

/**
 * 네비검색아이템
 * @param
 * @constructor
 */

export const NavRoute = ({ searchPosts }: { searchPosts: SearchPostsType[] }) => {
  const paths = [
    { href: '/about', text: 'Portfolio', check: '/about' },
    { href: '/posts?page=1', text: 'Posts', check: '/posts' },
  ];

  return (
    <ul className={`${styles.boxUl} mr-2`}>
      {/*/!*중앙네비*!/*/}
      {paths.map(({ href, text, check }) => {
        return <NavSearchLink key={text} href={href} text={text} check={check} />;
      })}
      <NavRouteItem searchPosts={searchPosts} />
    </ul>
  );
};
