import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={'my-6 text-2xl font-semibold '}>
      <ul className={'flex justify-between'}>
        <li>
          <Link href={'/about'}>heisje</Link>
        </li>
        <li>
          <Link href={'/blog'}>blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
