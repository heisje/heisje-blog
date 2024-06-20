import { ReactElement } from 'react';
import PortfolioNav from '@/app/(portfolio)/portfolio/PortfolioNav';
import Image from 'next/image';
import aboutTitleImg from '@public/images/aboutTitle.png';

const data = [
  {
    title: 'Poke type Calculator',
    description: '포켓몬 타입 계산기',
    image: aboutTitleImg,
    link: '',
  },
  {
    title: '지피지기',
    description: 'Chat-GPT 프롬프트 공유',
    image: aboutTitleImg,
    link: '',
  },
  {
    title: '지금 여기 블로그',
    description: '이 블로그입니다...',
    image: aboutTitleImg,
    link: '',
  },
];

interface ExperienceItem {
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  others?: ReactElement;
}

const experiences: Array<ExperienceItem> = [
  {
    title: '삼성청년SW아카데미',
    startDate: '2022.07',
    endDate: '2023.07',
    description: '실전형 SW교육과정(코딩중심교육 및 프로젝트4회 과정) 부울경 대표 교육생으로 수료',
    others: (
      <ul>
        <li>
          <strong className={'text-primary-500'}>부산지방고용노동청장상 | 우수 수료생 (약 100명 중 4명)</strong>
        </li>
        <li>자율 프로젝트 우수상 (5팀 중 1등) 지피지기</li>
        <li>메타버스 게임 우수상 (7팀 중 1등) SpaceRocketDelivery</li>
        <li>Web Socket 우수상 (8팀 중 3등) 토니버니</li>
        <li>영화 프로젝트 우수상 (11팀 중 2등) 20.</li>
        <li>종합 성적 우수상 (23명 중 3등)</li>
      </ul>
    ),
  },
  {
    title: '부산대학교',
    startDate: '2015.03',
    endDate: '2022.08',
    description: '디자인학과 Design&Technology전공',
    others: (
      <ul>
        <li>졸업작품: 머신러닝 라이브러리를 활용한 인터렉티브 포토존 제작</li>
        <li>졸업전시 Memory 웹 팀장</li>
      </ul>
    ),
  },
  {
    title: '동아리 Apptive',
    startDate: '2020.09',
    endDate: '2021.09',
    description: `앱 개발 동아리 | 5,000명이 사용한 앱 "모꾸다꾸"초기 UI/UX디자이너`,
    others: (
      <ul>
        <li></li>
      </ul>
    ),
  },
  {
    title: '스타트업 WhileTure:',
    startDate: '2019.07',
    endDate: '2021.09',
    description: '실시간영상광고 온애드 서비스 UX/UI 디자인',
    others: (
      <ul>
        <li></li>
      </ul>
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      <PortfolioNav />

      <div className={'h-96 flex justify-center items-center'}>
        이 페이지는 리뉴얼중입니다. 예쁘게 봐주세요..........
      </div>

      <ul className={'mx-4 my-12 grid grid-cols-1 sm:grid-cols-2 gap-2'}>
        {data.map((d) => (
          <li
            key={d.title}
            className={'relative ease-in-out duration-300 hover:scale-105 hover:shadow h-96 rounded overflow-hidden'}
          >
            <Image
              src={d.image}
              alt={`${d.title} image`}
              placeholder="blur"
              objectFit="cover"
              objectPosition="center"
              className={'absolute left-0 top-0 -z-10 '}
            />
            <div className={'h-full flex flex-col items-center justify-center bg-c-gray-950/50'}>
              <h3 className={'text-2xl'}>{d.title}</h3>
              <p>{d.description}</p>
              <button
                className={
                  'ease-out duration-300 hover:scale-105 hover:shadow px-4 py-1.5 bg-blue-500 rounded-full text-sm text-c-gray-50'
                }
              >
                더 알아보기
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={'w-full flex justify-center items-center '}>
        <ul className={'mx-4 my-12 relative'}>
          {experiences.map((e, i) => (
            <>
              <li key={e.title} className={'sm:flex'}>
                <div className={'hidden sm:block whitespace-nowrap'}>
                  {e.startDate}
                  {e?.endDate && <span> ~ {e?.endDate}</span>}
                </div>

                <div className={'hidden sm:block mx-8 '}></div>
                <div>
                  <h3 className={'text-2xl'}>
                    {e.title}
                    <span className={'font-normal text-sm ml-4 sm:hidden whitespace-nowrap'}>
                      {e.startDate} ~ {e?.endDate && e.endDate}
                    </span>
                  </h3>

                  <p>{e.description}</p>
                  <div className={'mt-4 mb-12 flex-nowrap'}>{e?.others}</div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className={'p-12 bg-white'}>
        <h1 className={'text-c-gray-500'}>기술스택</h1>
        <div className={'inline-block'}>
          <ul className={'rounded-full flex py-1 px-1 bg-c-gray-400'}>
            <li className={'rounded-full bg-red-400 py-1 px-2'}>프론트엔드</li>
            <li className={'rounded-full py-1 px-2'}>백엔드</li>
            <li className={'rounded-full py-1 px-2'}>기타</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
