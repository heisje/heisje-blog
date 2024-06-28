import { Logo } from '@/components/Header/Logo';
import { postManager } from '@/model/post';
import { NavThemeReactive } from '@/components/Nav/NavItem/NavTheme';
import { PortfolioNavItem } from '@/app/(portfolio)/portfolio/PortfolioNavItem';
import { PortfolioNavSearch } from '@/app/(portfolio)/portfolio/PortfolioNavSearch';

const searchPosts = postManager.getPostsForSearch(); // 검색만을 위한 배열
const PortfolioNav = () => {
  return (
    <>
      <nav className={'z-10 w-full h-11 fixed top-0 flex justify-between items-center py-1 px-4 bg-black/0 '}>
        <Logo />

        <ul className={'flex gap-4 items-center text-sm'}>
          <PortfolioNavItem path={{ text: '포트폴리오', href: '/portfolio', check: '/portfolio' }} />
          <PortfolioNavItem path={{ text: '블로그', href: '/posts', check: '/posts' }} />

          <PortfolioNavSearch searchPosts={searchPosts} />
          <NavThemeReactive />
        </ul>
      </nav>
      {/*<div className={'h-11'}></div>*/}
    </>
  );
};

export default PortfolioNav;
