import Link from 'next/link';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import Image from 'next/image';
import aboutTitleImg from '@public/images/aboutTitle.png';

const stacks = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'Next', 'Vue'],
  backend: ['SpringBoot', 'MySQL', 'Django', 'AWS'],
  etc: ['Docker', 'Unity', 'Arduino', 'Processing'],
};

const techs = {
  zippyziggy: ['Next.js', 'TypeScript', 'Redux-Toolkit', 'React-query', 'StyledComponent'],
  tonnybunny: ['Vue', 'Vuex', 'SCSS', 'JavaScript', 'Spring Boot', 'JPA'],
  postit: ['ml5.js', 'p5.js', 'JavaScript'],
};

export const AboutHeader = () => {
  return (
    <div className={'flex flex-wrap justify-between items-center'}>
      <div>
        <h1 className={'flex-shrink-0 mb-0  font-light'}>
          <span>안녕하세요!</span>
          <br />
          <span>UX와 DX에 관심이 많은</span>

          <br />
          <span>
            개발자 <span className={'font-bold'}>김희제</span>입니다.
          </span>
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
  );
};

export const AboutStacks = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <strong className={'mr-2'}>FrontEnd: </strong>
            {stacks.frontend.map((stack) => (
              <code key={stack} className={'text-sm bg-c-gray-400/20 mr-2 px-1 py-0.5 rounded'}>
                {stack}
              </code>
            ))}
          </li>
          <li>
            <strong className={'mr-2'}>BackEnd: </strong>
            {stacks.backend.map((stack) => (
              <code key={stack} className={'text-sm bg-c-gray-400/20 mr-2 px-1 py-0.5 rounded'}>
                {stack}
              </code>
            ))}
          </li>
          <li>
            <strong className={'mr-2'}>ETC: </strong>
            {stacks.etc.map((stack) => (
              <code key={stack} className={'text-sm bg-c-gray-400/20 mr-2 px-1 py-0.5 rounded'}>
                {stack}
              </code>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};

export const AboutExperience = () => {
  return (
    <>
      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>삼성청년SW아카데미</h2>
        <div>
          <p>2022.07 ~ 2023.06</p>
          <p>실전형 SW교육과정(코딩중심교육 및 프로젝트4회 과정) 부울경 대표 교육생으로 수료</p>

          <h3>수상내역</h3>
          <ul className={''}>
            <li>
              <strong className={'text-primary-500'}>부산지방고용노동청장상 | 대표 수료생 (권역 내 4명)</strong>
            </li>
            <li>종합 성적 우수상 (23명 중 3등)</li>
            <li>[5팀 중 1등] 지피지기</li>
            <li>[7팀 중 1등] SpaceRocketDelivery</li>
            <li>[8팀 중 3등] 토니버니</li>
            <li>[11팀 중 2등] 20.</li>
          </ul>
        </div>
      </div>

      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>부산대학교 Design&Technology</h2>
        <p>2015.03 ~ 2022.08</p>
        <div>
          졸업전시 웹팀 팀장 <br /> 머신러닝 라이브러리를 활용한 인터렉티브 아트 제작 <br />
          성적 우수 장학금 4회
        </div>
      </div>

      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>동아리 Apptive</h2>
        <p>2020.09 ~ 2021.09</p>
        <div>
          5,000명이 사용하는 {`'모꾸다꾸'`} 앱 초기 UX/UI디자인
          <br />
          3회의 앱 프로젝트 기획 및 디자인
        </div>
      </div>

      <div className={'mb-20 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>스타트업 WhileTrue</h2>
        <p>2020.07 ~ 2021.09</p>
        <div>트위치 속 광고 {`'온애드'`} UX/UI 디자이너</div>
      </div>
    </>
  );
};

export const AboutProjects = () => {
  return (
    <>
      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>지피지기</h2>
        <p>Chat-GPT 프롬프트 및 대화공유 서비스 / 6인 팀</p>
        <p>
          <strong>성과: 🏆 특화 프로젝트 우수상 (5팀 중 1등) (SSAFY)</strong>
        </p>
        <p className={'break-keep'}>
          <strong className={'mr-2'}>FrontEnd: </strong>
          {techs.zippyziggy.map((tech) => (
            <>
              <code key={tech} className={'text-sm bg-c-gray-400/20 mr-1 px-1 py-0.5 rounded'}>
                {tech}
              </code>{' '}
            </>
          ))}
        </p>
        <ul>
          <li>300명 베타테스터대상으로 모니터링 인프라 마련, 에러 검출</li>
          <li>CSR/SSR 코어 웹 바이탈 테스트, 인식속도 2.8초에서 0.8초 3배 향상</li>
          <li>Canny를 활용한 피드백 및 버전관리, 피드백기반 가이드 생성</li>
          <li>디자인 시스템 기반 공통 컴포넌트 설계 및 구현</li>
          <li>모바일 웹 반응형 및 다크모드 구현</li>
          <li>React-query 캐싱, 이미지 압축, SSE를 통한 서버비용 감소</li>
          <li>JWT Token기반 유저기능 및 Interceptor 구현</li>
        </ul>
        {/*<div>*/}
        {/*  <Image*/}
        {/*    className={'rounded-lg h-24'}*/}
        {/*    src={'/images/aboutTitle.png'}*/}
        {/*    alt={'소개사진'}*/}
        {/*    width={64}*/}
        {/*    height={64}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>토니버니</h2>
        <p>통역도 콜택시처럼 쉽게하자! (실시간/예약 통역, 번역기능) / 6인 팀</p>
        <p>
          <strong>🏆 공통 프로젝트 우수상 (8팀 중 3등) (SSAFY)</strong>
        </p>
        <p>
          <strong className={'mr-2'}>FrontEnd: </strong>
          {techs.zippyziggy.map((tech) => (
            <code key={tech} className={'text-sm bg-c-gray-400/20 mr-2 px-1 py-0.5 rounded'}>
              {tech}
            </code>
          ))}
        </p>
        <ul>
          <li>63개의 페이지를 공통 UI컴포넌트로 통일성 있게 제작</li>
          <li>인자별 UI 컴포넌트 공유 페이지로 원활한 협업</li>
          <li>Figma, ERD, 시퀀스다이어그램, 컨벤션, Notion, 간트차트를 통한 협업</li>
          <li>FrontEnd 페이지 및 공통 컴포넌트 설계 및 구현</li>
          <li>BackEnd 커뮤니티API구현</li>
        </ul>
      </div>

      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>POST IT (Interactive art : 졸업전시)</h2>
        <p>머신러닝 라이브러리를 활용한 사용자 얼굴 인식 및 입 합성</p>
        <p>
          <strong>📸 200장 이상의 관객 사진 및 SNS 다수 공유</strong>
        </p>
        <ul>
          <li>
            <strong className={'mr-2'}>Stacks: </strong>
            {techs.postit.map((tech) => (
              <code key={tech} className={'text-sm bg-c-gray-400/20 mr-2 px-1 py-0.5 rounded'}>
                {tech}
              </code>
            ))}
          </li>
          <li>ml5.js를 활용하여 사용자 얼굴 인식</li>
          <li>다중 사용자 다양한 입👄👅 실시간 합성 </li>
          <li>웹 화면에 합성한 기록 누적</li>
        </ul>
      </div>

      <div className={'mb-4 w-full py-5 px-5 border border-c-gray-500/20 rounded-xl'}>
        <h2>SpaceRockerDelivery</h2>
        <p>
          <code className={'text-sm bg-c-gray-400/20 mr-2 px-1 py-0.5 rounded'}>Unity</code>
          <code className={'text-sm bg-c-gray-400/20 px-1 py-0.5 rounded'}>C#</code>을 활용한 멀티 타워디펜스 게임 / 6인
          팀
        </p>
        <p>
          <strong>🏆 공통 프로젝트 우수상 (7팀 중 1등) (SSAFY)</strong>
        </p>
        <ul>
          <li>Client / Unity, Socket 활용</li>
          <li>클라이언트 소켓 통신 구축(직렬화 및 구조화). </li>
          <li>우주선, 캐릭터, 모듈, 충돌, 포탑, 생산, 조합 기능 구현</li>
          <li>싱글톤 패턴과 Spring 통신구조를 차용하여 이해하기 쉬운 통신 방법 구축</li>
        </ul>
      </div>
    </>
  );
};
