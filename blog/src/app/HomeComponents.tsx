import Link from 'next/link';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import Image from 'next/image';
import aboutTitleImg from '@public/images/aboutTitle.png';
import React from 'react';

export const HomeHeader = () => {
  return (
    <div className={'flex flex-wrap justify-between items-center'}>
      <div>
        <h1 className={'flex-shrink-0 mb-0'}>
          <span className={'font-medium'}>
            Hi, I{"'"}m <span className={'underline decoration-dashed decoration-4 decoration-primary-400'}>Heeje</span>
          </span>
          <br />
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Frontend Developer.
          </span>
          <br />
        </h1>
        <div className={'flex flex-wrap items-center mt-3'}>
          <Link href={'https://github.com/heisje'} className={'mr-2 transition hover:text-primary-400'}>
            <FaSquareGithub className={'text-4xl'} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/heeje-kim-715488286/'}
            className={'transition hover:text-primary-400'}
          >
            <FaLinkedin className={'text-4xl'} />
          </Link>
        </div>
      </div>
      <Image
        className={'w-0 y-0 sm:w-48 sm:h-48 rounded-3xl'}
        src={aboutTitleImg}
        alt={'소개사진'}
        placeholder="blur"
      />
    </div>
  );
};
