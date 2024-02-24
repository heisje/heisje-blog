import { Outfit } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Logo } from '@/components/Header/Logo';
import { StaticLogo } from '@/components/Header/StaticLogo';

export const questrial = Outfit({
  weight: '400',
  subsets: ['latin'],
});

export const Header = () => {
  return (
    <>
      <header
        className={`${questrial.className} font-normal sm:flex sm:flex-row sm:justify-between items-center my-12 px-4 mx-auto max-w-[640px]`}
      >
        {/*로고*/}
        <Logo />

        {/*네비*/}
        <Nav />
      </header>
    </>
  );
};
