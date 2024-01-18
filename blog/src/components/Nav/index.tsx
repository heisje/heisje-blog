import { NavSearch } from '@/components/Header/NavSearch';
import { Outfit } from 'next/font/google';
import { NavTheme } from '@/components/Header/NavTheme';
import NavLogo from '@/components/Header/NavLogo';

export const questrial = Outfit({
  weight: '400',
  subsets: ['latin'],
});

export const paths = [
  { href: '/about', text: 'Portfolio', check: '/about' },
  { href: '/posts?page=1', text: 'Posts', check: '/posts' },
];

const Nav = () => {
  return (
    <>
      <header
        className={`${questrial.className} font-normal sm:flex sm:flex-row sm:justify-between items-center my-12 px-4 mx-auto max-w-[640px]`}
      >
        {/*로고*/}
        <NavLogo />

        {/*네비*/}
        <nav className={`block mt-3 sm:mt-0`}>
          <NavSearch />
          <NavTheme />
        </nav>
      </header>
    </>
  );
};

export default Nav;
