'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';
import { FiSearch } from 'react-icons/fi';
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';

import { getSearchPosts, searchPostsType } from '@/utils/posts';

interface NavLinkProps {
  text: string;
  href: string;
  check: string;
}

/*
 * about과 post Nav
 */
const NavLink = ({ text, href, check }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${styles.boxLi} ${styles.text} ${pathname === check ? styles.activeLink : ''}`}>
      <span>{text}</span>
    </Link>
  );
};

/*
 * 검색 아이콘
 */
const NavSearch = ({ searchPosts }: { searchPosts: searchPostsType[] }) => {
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

const NavSearchModal = ({
  isDisplay,
  setIsDisplay,
  searchPosts,
}: {
  isDisplay: boolean;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
  searchPosts: searchPostsType[];
}) => {
  // input을 참조
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태
  const resultPosts = useMemo(() => {
    if (searchQuery.length < 2) return [];
    if (searchQuery.length >= 2)
      return [
        ...searchPosts.filter((post) => {
          return post.keywords.toLowerCase().includes(searchQuery.toLowerCase());
        }),
      ];
  }, [searchQuery, searchPosts]); // 검색 결과 배열

  // 모달이 표시되고 isDisplay가 true일 때 input 요소에 포커스를 설정
  useEffect(() => {
    if (isDisplay && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDisplay]);

  // input 검색어 변경
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/*검색 백그라운드*/}
      <div
        className={`transition fixed top-0 left-0 w-full h-full justify-center items-center z-10 ${
          isDisplay ? 'flex' : 'hidden'
        }`}
        onClick={() => setIsDisplay(!isDisplay)}
      >
        {/*검색 창*/}
        <div
          className={`${styles.searchWidth} top-20 ${isDisplay ? 'fixed' : 'hidden'}`}
          onClick={(e) => {
            e.stopPropagation();
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        >
          <div
            className={`${styles.searchModal} flex shadow-xl shadow-primary-500/10 rounded-2xl h-12 backdrop-blur-sm z-20 `}
          >
            {/*검색 아이콘*/}
            <div className={'h-full flex items-center mx-3 '}>
              <FiSearch size={'20'} />
            </div>

            {/*검색 input*/}
            <input
              id={'SEARCH'}
              ref={inputRef}
              className={'bg-transparent outline-0 border-0'}
              placeholder={'Posts 검색'}
              onChange={handleSearchChange}
            />
          </div>

          {/*검색 결과*/}
          {resultPosts && resultPosts.length ? (
            <ul
              className={`${styles.resultPostUl} max-w-full backdrop-blur-2xl rounded-2xl border border-c-gray-500/30`}
            >
              {resultPosts.map((post) => (
                <li
                  key={post.url}
                  className={
                    'w-full border-b last:border-b-0 border-c-gray-500/30 rounded-t-2xl last:rounded-t-none last:rounded-b-2xl hover:bg-primary/30 '
                  }
                >
                  <Link className={'block w-full p-3 '} href={`/posts/${post.url}`}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : searchQuery.length >= 2 ? (
            <ul
              className={`${styles.resultPostUl} max-w-full backdrop-blur-2xl rounded-2xl border border-c-gray-500/30`}
            >
              <li
                className={
                  'w-full border-b last:border-b-0 border-c-gray-500/30 rounded-t-2xl last:rounded-t-none last:rounded-b-2xl hover:bg-primary/30 '
                }
              >
                <span className={'block w-full p-3 '}>해당하는 검색어가 없어요!</span>
              </li>
              <li
                className={
                  'cursor-pointer w-full border-b last:border-b-0 border-c-gray-500/30 rounded-t-2xl last:rounded-t-none last:rounded-b-2xl hover:bg-primary/30 '
                }
              >
                <span
                  onClick={() => {
                    setSearchQuery('JS');
                    if (inputRef.current) {
                      inputRef.current.value = 'JS';
                    }
                  }}
                  className={'block w-full p-3 '}
                >
                  추천 키워드 : JS
                </span>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export { NavLink, NavSearch, NavSearchModal };
