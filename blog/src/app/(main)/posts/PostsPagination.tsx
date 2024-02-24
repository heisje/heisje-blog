'use client';
import styles from '@/components/OldNav/Nav.module.css';
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

type props = {
  page: number;
  maxSize: number;
};

// 페이지 생성
function generatePagination(currentPage: number, totalPages: number) {
  const pagination = [];
  const maxPagesToShow = 5;

  // 시작 페이지를 계산
  let startPage = currentPage - Math.floor(maxPagesToShow / 2);
  startPage = Math.max(startPage, 1);
  // 끝 페이지를 계산
  let endPage = startPage + maxPagesToShow - 1;
  endPage = Math.min(endPage, totalPages);
  // 시작 페이지를 조정
  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }
  return pagination;
}

const PostsPagination = ({ page, maxSize }: props) => {
  const isMounted = useMounted();
  const pagination = generatePagination(page, maxSize);

  useEffect(() => {}, [isMounted]);

  const pathname = usePathname();
  const router = useRouter();

  const onClick = (num: number) => {
    return () => {
      // window.scroll({ top: 0, behavior: 'smooth' });
      router.push(`${pathname}?page=${num}`, { scroll: true });
    };
  };

  return (
    <aside className={'w-full flex'}>
      <ul className={`${styles.boxUl} mx-auto`}>
        {!pagination.includes(1) ? (
          <li className={`h-8 ${styles.boxLi} ${styles.text}`}>
            <div>{'<'}</div>
          </li>
        ) : null}
        {pagination.map((num) => {
          return (
            <li
              onClick={onClick(num)}
              key={num}
              className={`h-8 ${styles.boxLi} ${styles.text} ${isMounted && page === num ? styles.activeLink : ''}`}
            >
              <div>{num}</div>
            </li>
          );
        })}
        {!pagination.includes(maxSize) ? (
          <li className={`h-8 ${styles.boxLi} ${styles.text}`}>
            <div>{'>'}</div>
          </li>
        ) : null}
      </ul>
    </aside>
  );
};

export default PostsPagination;
