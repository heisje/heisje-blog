import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>heisje</Link>
        </li>
        <li>
          <Link href={'/about'}>about</Link>
        </li>
        <li>
          <Link href={'/blog'}>blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
