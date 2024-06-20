import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import Image from 'next/image';
import aboutTitleImg from '@public/images/aboutTitle.png';

export default function HomePage() {
  return (
    <section className={'min-h-screen mx-auto max-w-[640px]'}>
      <div className={'flex flex-wrap justify-between items-center'}>
        <div>
          <h1 className={'flex-shrink-0 mb-0'}>
            <div className={'font-bold'}>
              Hi, I{"'"}m{' '}
              <span className={'underline decoration-dashed decoration-4 decoration-primary-400'}>Kim Hee-Je</span>
            </div>

            {/*<span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">*/}
            {/*  Frontend Developer.*/}
            {/*</span>*/}
            <div className={'font-extralight text-lg text-body'}>
              Frontend developer, <span className={'line-through'}>but not yet</span>
            </div>
          </h1>
          <div className={'flex flex-wrap items-center mt-3 text-heading'}>
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
      <div className={`w-full h-screen mt-4`}>
        공부한 것을 정리할 겸 나만의 블로그를 만들었습니다. 이왕 만든 김에 재밌는 글을 쓰기 위해 노력하겠습니다.
        <div className={'mt-12'}>
          <h3>블로그 스펙</h3>
          <div className={'flex flex-wrap'}>
            {[
              'Next.js',
              'TypeScript',
              'Contentlayer',
              'tailwind',
              'Cypress',
              'Docker',
              'Jenkins',
              'EC2/ubuntu/Nginx',
            ].map((stack) => (
              <code key={stack} className={'text-sm bg-c-gray-400/20 mr-2 mt-1 px-1 py-0.5 rounded'}>
                {stack}
              </code>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
