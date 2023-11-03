'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './Nav.module.css';

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${style.box40} ${pathname === href ? style.activeLink : ''}`}>
      <span>{text}</span>
    </Link>
  );
};
export default NavLink;
