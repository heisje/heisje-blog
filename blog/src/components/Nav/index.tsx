import Link from 'next/link';
import { NavLink, NavSearch } from '@/components/Nav/NavLink';
import { Outfit } from 'next/font/google';
import NavTheme from '@/components/Nav/NavTheme';
import styles from './Nav.module.css';
import { getSearchPosts } from '@/utils/posts';
import NavLogo from '@/components/Nav/NavLogo';

export const questrial = Outfit({
  weight: '400',
  subsets: ['latin'],
});

const Nav = () => {
  const paths = [
    { href: '/about', text: 'Portfolio', check: '/about' },
    { href: '/posts?page=1', text: 'Posts', check: '/posts' },
  ];

  const searchPosts = getSearchPosts(); // 검색만을 위한 배열

  return (
    <>
      <header
        className={`${questrial.className} font-normal sm:flex sm:flex-row sm:justify-between items-center my-12 px-4 mx-auto max-w-[640px]`}
      >
        <Link className={'block text-xl font-light transition hover:opacity-50'} href={'/'}>
          <NavLogo />
        </Link>

        <nav className={`block mt-3 sm:mt-0`}>
          {/*로고*/}
          <ul className={`${styles.boxUl} mr-2`}>
            {/*중앙네비*/}

            {paths.map(({ href, text, check }) => {
              return (
                <li key={href}>
                  <NavLink href={href} text={text} check={check} />
                </li>
              );
            })}
            <NavSearch searchPosts={searchPosts} />
          </ul>

          {/*테마 네비*/}
          <NavTheme />
        </nav>
      </header>
    </>
  );
};

export default Nav;
