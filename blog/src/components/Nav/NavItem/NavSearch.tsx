'use client';

import { searchPostsType } from '@/utils/posts';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavSearchModal } from '@/components/Nav/NavSearchModal';
import styles from '@/components/Nav/Nav.module.css';

/**
 * 네비검색아이템
 * @param searchPosts
 * @constructor
 */
export const NavSearch = ({ searchPosts }: { searchPosts: searchPostsType[] }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <>
      <li className={`h-8 ${styles.boxLi} ${styles.icon}`} onClick={() => setIsDisplay(!isDisplay)}>
        <div>
          <FiSearch size={'20'} />
        </div>
      </li>
      <NavSearchModal isDisplay={isDisplay} setIsDisplay={setIsDisplay} searchPosts={searchPosts} />
    </>
  );
};
