import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={'flex justify-between my-6 text-2xl font-semibold '}>
      <ul>
        <li>
          <Link href={'/'}>heisje</Link>
        </li>
      </ul>
      <ul className={'flex space-x-16'}>
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
