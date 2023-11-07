'use client';

import styles from '@/components/Nav/Nav.module.css';
import NavLink from '@/components/Nav/NavLink';
import { FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import Link from 'next/link';
import { allPosts } from '@/../.contentlayer/generated';
import useMounted from '@/hook/useMounted';
import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const paths = [
  { href: '/about', text: 1 },
  { href: '/blog', text: 2 },
  { href: '/blog', text: 3 },
  { href: '/blog', text: 4 },
  { href: '/blog', text: 5 },
];

const BlogPagination = () => {
  const isMounted = useMounted();

  // simulate an api call and update state
  useEffect(() => {}, [isMounted]);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('page');
  const onClick = (num: number) => {
    return () => {
      router.push(`${pathname}?page=${num}`, { scroll: true });
    };
  };

  return (
    <ul className={`${styles.boxUl} mx-auto`}>
      <li className={`h-8 ${styles.boxLi} ${styles.icon}`}>
        <div>{'<'}</div>
      </li>
      {paths.map(({ href, text }) => {
        return (
          <li
            onClick={onClick(text)}
            key={href}
            className={`h-8 ${styles.boxLi} ${styles.text} ${
              isMounted && search === text.toString() ? styles.activeLink : ''
            }`}
          >
            <div>{text}</div>
          </li>
        );
      })}
      <li className={`h-8 ${styles.boxLi} ${styles.icon} }`}>
        <div>{'>'}</div>
      </li>
    </ul>
  );
};

export default BlogPagination;
