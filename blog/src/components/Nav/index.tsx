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

const Nav = () => {
  const paths = [
    { href: '/about', text: '<About />', check: '/about' },
    { href: '/posts?page=1', text: '<Posts />', check: '/posts' },
  ];

  const searchPosts = getSearchPosts(); // 검색만을 위한 배열

  return (
    <>
      <header className={'flex flex-col items-center my-12 px-4 mx-auto max-w-[640px]'}>
        <Link className={'block text-xl font-light transition hover:opacity-50'} href={'/'}>
          <span>
            <span className={`font-extrabold text-primary-500`}>{`<h10>`}</span>내 개발일지
            <span className={`font-extrabold text-primary-500`}>{`</h10>`}</span>
          </span>
        </Link>

        <nav className={`${questrial.className} mt-3 `}>
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
