'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
export const PortfolioNavItem = ({ path }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path.href}
        className={`hover:text-primary-500 hover:font-bold ${
          pathname === path.check ? 'text-primary-500 font-bold' : 'font-normal'
        }`}
        id={`${path.text}-nav-button`}
      >
        {path.text}
      </Link>
    </li>
  );
};
