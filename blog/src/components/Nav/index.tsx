import { NavSearch } from '@/components/Nav/NavSearch';
import { NavTheme } from '@/components/Nav/NavTheme';

export const paths = [
  { href: '/about', text: 'Portfolio', check: '/about' },
  { href: '/posts?page=1', text: 'Posts', check: '/posts' },
];

const Nav = () => {
  return (
    <nav className={`block mt-3 sm:mt-0`}>
      <NavSearch />
      <NavTheme />
    </nav>
  );
};

export default Nav;
