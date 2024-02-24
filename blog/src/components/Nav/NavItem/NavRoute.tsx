'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/components/Nav/Nav.module.css';

interface NavLinkProps {
  path: PathType;
}

interface PathType {
  text: string;
  href: string;
  check: string;
}

/*
 * about과 post OldNav
 */
export const NavRoute = ({ path }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path.href}
        className={`${styles.boxLi} ${styles.text} ${pathname === path.check ? styles.activeLink : ''}`}
      >
        <span>{path.text}</span>
      </Link>
    </li>
  );
};
