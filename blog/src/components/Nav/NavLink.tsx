'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${styles.boxLi} ${styles.text} ${pathname === href ? styles.activeLink : ''}`}>
      <span>{text}</span>
    </Link>
  );
};
export default NavLink;
