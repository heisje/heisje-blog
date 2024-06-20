import { NavBar } from '@/components/Nav/NavBar';
import { NavItem } from '@/components/Nav/NavItem';
import { postManager } from '@/model/post';

export const paths = [
  { href: '/portfolio', text: 'Portfolio', check: '/portfolio' },
  { href: '/posts?page=1', text: 'Posts', check: '/posts' },
];

export const Nav = () => {
  const searchPosts = postManager.getPostsForSearch(); // 검색만을 위한 배열

  return (
    <nav className={`block mt-3 sm:mt-0`}>
      <NavBar>
        {paths.map((path) => (
          <NavItem.route key={path.text} path={path} />
        ))}
        <NavItem.search searchPosts={searchPosts} />
      </NavBar>

      <NavBar>
        <NavItem.theme type={'light'} />
        <NavItem.theme type={'system'} />
        <NavItem.theme type={'dark'} />
      </NavBar>
    </nav>
  );
};
