'use client';

import { getSearchPosts, searchPostsType } from '@/utils/posts';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavSearchLink } from '@/components/Nav/NavSearchLink';
import styles from './Nav.module.css';
import { paths } from '@/components/Nav/index';
import { NavSearchItem } from '@/components/Nav/NavSearchItem';

/**
 * 네비검색아이템
 * @param
 * @constructor
 */
export const NavSearch = () => {
  const searchPosts = getSearchPosts(); // 검색만을 위한 배열

  return (
    <ul className={`${styles.boxUl} mr-2`}>
      {/*중앙네비*/}
      {paths.map(({ href, text, check }) => {
        return <NavSearchLink key={href} href={href} text={text} check={check} />;
      })}
      <NavSearchItem searchPosts={searchPosts} />
    </ul>
  );
};
