import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';
import type { Metadata } from 'next';

function AboutStack() {
  return null;
}

const aboutText = {
  title: ``,
};

export const metadata: Metadata = {
  title: "Heisje's portfolio",
  description: 'Frontend Developer',
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
    <>
      <main className={'mx-auto max-w-[640px]'}>
        <header className={'mb-10'}>
          <div className={'flex flex-wrap justify-between items-center'}>
            <div>
              <h1 className={'flex-shrink-0 mb-0'}>
                안녕하세요!
                <br />
                사용자의 니즈를 파악하는
                <br />
                개발자 김희제입니다.
              </h1>
              <div className={'flex flex-wrap items-center my-2'}>
                <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>

                <Icon src={'https://github.com/heisje'} />
                <Icon src={'https://www.linkedin.com/in/heeje-kim-715488286/'} />
                <Icon src={'https://github.com/heisje'} />
              </div>
            </div>
            <Image
              className={'w-0 y-0 sm:w-48 sm:h-48 rounded-3xl'}
              src={'/images/aboutTitle.png'}
              alt={'소개사진'}
              width={300}
              height={300}
            />
          </div>
        </header>

        <article className={'mb-40'}>
          <h1>Stacks.</h1>
          <div>
            <h5>Frontend</h5>
            <ul>
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>VueJS</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h5>Backend</h5>
            <ul>
              <li>SpringBoot</li>
              <li>MySQL</li>
              <li>Django</li>
            </ul>
          </div>
          <div>
            <h5>ETC</h5>
            <ul>
              <li>AWS</li>
              <li>Docker</li>
              <li>NGINX</li>
              <li>Git</li>
              <li>Jira</li>
              <li>Unity</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </div>
        </article>
        <article className={'mb-40'}>
          <div>
            <h2>Projects.</h2>
            <div>날짜</div>
            <div>이름</div>
            <div>설명</div>

            <Image
              className={'w-24 h-24 object-cover'}
              src={'/images/aboutTitle.png'}
              alt={'소개사진'}
              width={64}
              height={64}
            />
            <Image
              className={'w-24 h-24 object-cover'}
              src={'/images/aboutTitle.png'}
              alt={'소개사진'}
              width={64}
              height={64}
            />
            <Image
              className={'w-24 h-24 object-cover'}
              src={'/images/aboutTitle.png'}
              alt={'소개사진'}
              width={64}
              height={64}
            />
            <Link
              href={'naver.com'}
              className={'transition duration-1000 underline text-black hover:text-blue-500 hover:underline'}
            >
              naver
            </Link>
            <p className="underline decoration-blue-400 decoration-4 underline-offset-4">텍스트 내용</p>
          </div>
        </article>
        <article className={'mb-40'}>
          <h1>Experiences.</h1>
        </article>
      </main>
    </>
  );
}
