'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';
import { FiSearch } from 'react-icons/fi';
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';

import { getSearchPosts, searchPostsType } from '@/utils/posts';
import { questrial } from '@/components/Header/index';

interface NavLinkProps {
  text: string;
  href: string;
  check: string;
}

/*
 * about과 post Header
 */
export const NavSearchLink = ({ text, href, check }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${questrial.className} ${styles.boxLi} ${styles.text} ${
          pathname === check ? styles.activeLink : ''
        }`}
      >
        <span>{text}</span>
      </Link>
    </li>
  );
};
