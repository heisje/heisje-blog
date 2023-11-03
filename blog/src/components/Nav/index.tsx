import Link from 'next/link';
import styles from './Nav.module.css';
import NavLink from '@/components/Nav/NavLink';
import { Outfit } from 'next/font/google';
import { FiMoon, FiSearch, FiSun } from 'react-icons/fi';

const questrial = Outfit({
  weight: '400',
  subsets: ['latin'],
});

const Nav = () => {
  const paths = [
    { href: '/resume', text: 'about' },
    { href: '/blog', text: 'blog' },
  ];
  return (
    <nav className={`${styles.box10} ${questrial.className}`}>
      <Link className={styles.logo} href={'/'}>
        <span className={styles.logo10}>Heisje</span>
      </Link>
      <ul className={styles.box20}>
        {paths.map(({ href, text }) => {
          return (
            <li className={styles.box30} key={href}>
              <NavLink href={href} text={text} />
            </li>
          );
        })}
        <li className={`${styles.box30} ${styles.box41} h-8`}>
          <div className={'flex h-full items-center'}>
            <FiSearch size={'20'} />
          </div>
        </li>
      </ul>
      <ul className={`${styles.box20} ml-4`}>
        <li className={`${styles.box30} ${styles.box41} h-8`}>
          <div className={'flex h-full items-center'}>
            <FiSun size={'20'} />
          </div>
        </li>
        <li className={`${styles.box30} ${styles.box41} h-8`}>
          <div className={'flex h-full items-center'}>
            <FiMoon size={'20'} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
