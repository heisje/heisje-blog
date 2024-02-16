'use client';

import { getSearchPosts, searchPostsType } from '@/utils/posts';
import { NavSearchLink } from '@/components/Nav/NavSearchLink';
import styles from './Nav.module.css';
import { NavSearchItem } from '@/components/Nav/NavSearchItem';

/**
 * 네비검색아이템
 * @param
 * @constructor
 */

export const NavSearch = ({ searchPosts }: { searchPosts: searchPostsType[] }) => {
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
      <NavSearchItem searchPosts={searchPosts} />
    </ul>
  );
};
