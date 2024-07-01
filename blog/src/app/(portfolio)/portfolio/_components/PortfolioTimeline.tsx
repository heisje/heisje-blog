import React, { ReactElement } from 'react';

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
    title: '인프런 클럽 스터디 BE',
    startDate: '2024.02',
    endDate: '2024.03',
    description: '인프런에서 주최한 Spring Boot 스터디',
    others: <ul></ul>,
  },
  {
    title: '앱 동아리 Apptive',
    startDate: '2020.09',
    endDate: '2021.09',
    description: `5,000명이 사용한 앱 "모꾸다꾸" UI/UX디자이너`,
    others: <ul></ul>,
  },
  {
    title: '학과동아리 알파',
    startDate: '2019.09',
    endDate: '2021.09',
    description: `유니티 AR프로젝트 및 아두이노-프로세싱 인터렉티브 아트 제작`,
    others: <ul></ul>,
  },
  {
    title: '스타트업 WhileTure:',
    startDate: '2019.07',
    endDate: '2021.09',
    description: '실시간영상광고 온애드 서비스 UX/UI 디자인',
    others: <ul></ul>,
  },
];

const PortfolioTimeline = () => {
  return (
    <div className={'mt-24 pt-24'}>
      <h1 className={'mx-4 text-center'} data-shadow="Projects.">
        Projects.
      </h1>
      <div className={'w-full flex justify-center items-center '}>
        <ul className={'mx-4 my-12 relative'}>
          {experiences.map((e, i) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioTimeline;
