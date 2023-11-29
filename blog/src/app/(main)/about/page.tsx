import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import aboutTitleImg from '@public/images/aboutTitle.png';
import { AboutExperience, AboutHeader, AboutProjects, AboutStacks } from '@/app/(main)/about/AboutComponents';

export const metadata: Metadata = {
  title: '김희제의 포트폴리오입니다!',
  description: '',
  openGraph: {
    title: "Heisje's portfolio",
    description: 'Frontend Developer',
    url: 'https://heisje.site/',
    siteName: 'Heisje',
    images: [
      {
        url: './come.jpg',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
};

export default function About() {
  return (
    <section>
      <header className={'mb-20'}>
        <AboutHeader />
      </header>
      <article className={'mb-20 leading-7'}>
        <div className={'mb-20'}>
          <h1 className={'mb-4'}>Developer.</h1>
          <p>
            2년간 UI/UX디자이너를 경험하고 개발자를 목표로 공부하고 있습니다. <br /> UX에 대한 관심으로 300명 사용자를
            모니터링하여 JS오류를 개선하고, 성능테스트 도구를 사용하며 인식 속도를 3배 빠르게 만든 경험이 있습니다.
            디자인 변경에 대응할 수 있는 코드를 작성합니다.
          </p>
        </div>

        <div className={'mb-20'}>
          <h1 className={'mb-4'}>Stacks.</h1>
          <AboutStacks />
        </div>

        <div className={'mb-20'}>
          <h1 className={'mb-4'}>Experience.</h1>
          <AboutExperience />
        </div>

        <div>
          <h1 className={'mb-4'}>Projects.</h1>
          <AboutProjects />
        </div>

        {/*<p className="underline decoration-blue-400 decoration-4 underline-offset-4">텍스트 내용</p>*/}
      </article>
    </section>
  );
}
