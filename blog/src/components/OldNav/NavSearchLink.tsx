'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';

interface NavLinkProps {
  text: string;
  href: string;
  check: string;
}

/*
 * about과 post OldNav
 */
export const NavSearchLink = ({ text, href, check }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link href={href} className={`${styles.boxLi} ${styles.text} ${pathname === check ? styles.activeLink : ''}`}>
        <span>{text}</span>
      </Link>
    </li>
  );
};
