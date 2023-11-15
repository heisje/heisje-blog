import Link from 'next/link';
import { NavLink, NavSearch } from '@/components/Nav/NavLink';
import { Outfit } from 'next/font/google';
import NavTheme from '@/components/Nav/NavTheme';
import styles from './Nav.module.css';
import { getSearchPosts } from '@/utils/posts';

const questrial = Outfit({
  weight: '400',
  subsets: ['latin'],
});

type props = {
  className: string;
};

const Nav = ({ className }: props) => {
  const paths = [
    { href: '/about', text: 'About' },
    { href: '/posts?page=1', text: 'Posts' },
  ];

  const searchPosts = getSearchPosts(); // 검색만을 위한 배열

  return (
    <nav className={`${questrial.className} my-6 ${className} `}>
      {/*로고*/}
      <Link className={'inline-block mr-2 align-middle text-3xl font-extrabold'} href={'/'}>
        <span>Heisje</span>
      </Link>

      {/*중앙네비*/}
      <ul className={`${styles.boxUl} mr-2`}>
        {paths.map(({ href, text }) => {
          return (
            <li key={href}>
              <NavLink href={href} text={text} />
            </li>
          );
        })}
        <NavSearch searchPosts={searchPosts} />
      </ul>

      {/*테마 네비*/}
      <NavTheme />
    </nav>
  );
};

export default Nav;
