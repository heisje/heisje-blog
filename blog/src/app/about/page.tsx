import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';
import type { Metadata } from 'next';

function AboutStack() {
  return null;
}

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
                야호 이건 또 언제 만드냐
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

        <article className={'mb-20'}>
          <div className={'mb-8'}>
            <h1 className={'mb-4'}>Developer.</h1>
            <p>
              2년간 UI/UX디자이너를 경험하고 개발자를 목표로 공부하고 있습니다. UX에 대한 관심으로 300명 사용자를
              모니터링하여 JS오류를 개선하고, 성능테스트 도구를 사용하며 인식 속도를 3배 빠르게 만든 경험이 있습니다.
              디자인 변경에 대응할 수 있는 코드를 작성합니다.
            </p>
          </div>

          <div className={'mb-8'}>
            <h1 className={'mb-4'}>Stacks.</h1>
            <div>
              <ul>
                <li>
                  FrontEnd: JavaScript, TypeScript, React.js, Next.js, Vue, HTML/CSS, Redux, React-query,
                  StyledComponent
                </li>
                <li>BackEnd: SpringBoot, MySQL, Django, AWS</li>
                <li>ETC: Docker, Unity, Arduino</li>
              </ul>
            </div>
          </div>

          <h1 className={'mb-8'}>Experience.</h1>
          <div className={'mb-8'}>
            <h2>삼성청년SW아카데미</h2>
            <div>
              <p>2022.07 ~ 2023.06</p>
              <p>실전형 SW교육과정(코딩중심교육 및 프로젝트4회 과정) 부울경 대표 교육생으로 수료</p>
              <ul>
                <li>부산지방고용노동청장상 | 대표 수료생 (권역 내 4명)</li>
                <li>종합 성적 우수상 (23명 중 3등)</li>
                <li>[5팀 중 1등] 지피지기</li>
                <li>[7팀 중 1등] SpaceRocketDelivery</li>
                <li>[8팀 중 3등] 토니버니</li>
                <li>[11팀 중 2등] 20.</li>
              </ul>
            </div>
          </div>

          <div className={'mb-8'}>
            <h2>부산대학교 Design&Technology</h2>
            <div>
              <p>2015.03 ~ 2022.08</p>
              <p>졸업전시 웹팀 팀장</p>
              <p>머신러닝 라이브러리를 활용한 인터렉티브 아트 제작</p>
              <p>성적 우수 장학금 4회</p>
            </div>
          </div>

          <div className={'mb-8'}>
            <h2>동아리 Apptive</h2>
            <div>
              <p>2020.09 ~ 2021.09</p>
              <p>5,000명이 사용하는 모꾸다꾸 앱 초기 UX/UI디자인</p>
              <p>앱 기획/디자인 3회</p>
            </div>
          </div>

          <div className={'mb-8'}>
            <h2>스타트업 WhileTrue</h2>
            <div>
              <p>2020.07 ~ 2021.09</p>
              <p>UX/UI 디자이너</p>
            </div>
          </div>

          <div>
            <h1 className={'mb-8'}>Projects.</h1>
            <div className={'mb-8'}>
              <h2>지피지기</h2>
              <p>Chat-GPT 프롬프트 및 대화공유 서비스 / 6인 팀</p>
              <p>
                <strong>성과: 🏆 특화 프로젝트 우수상 (5팀 중 1등) (SSAFY)</strong>
              </p>
              <p>기술: Next.js, TypeScript, Redux-Toolkit, React-query, StyledComponent</p>
              <ul>
                <li>300명 베타테스터를 대상으로 Jennifer Front를 사용한 모니터링, JS에러 0건을 6개월 유지</li>
                <li>CSR/SSR 코어 웹 바이탈 테스트, 인식속도 2.8초에서 0.8초 3배 향상</li>
                <li>Canny를 활용한 피드백 및 버전관리, 피드백기반 가이드 생성</li>
                <li>디자인 시스템 기반 공통 컴포넌트 설계 및 구현</li>
                <li>모바일 웹 반응형 및 다크모드 구현</li>
                <li>React-query 캐싱, 이미지 압축, SSE를 통한 서버비용 감소</li>
                <li>JWT Token기반 유저기능 및 Interceptor 구현</li>
              </ul>
            </div>
            <div className={'mb-8'}>
              <h2>토니버니</h2>
              <p>통역도 콜택시처럼 쉽게하자! (실시간/예약 통역, 번역기능) / 6인 팀</p>
              <p>
                <strong>🏆 공통 프로젝트 우수상 (8팀 중 3등) (SSAFY)</strong>
              </p>
              <p>기술: Vue, Vuex, SCSS, JavaScript, Spring Boot, JPA</p>
              <ul>
                <li>63개의 페이지를 공통 컴포넌트를 통해 4주만에 제작</li>
                <li>UI 컴포넌트 공유 페이지를 통한 원활한 협업</li>
                <li>Figma, ERD, 시퀀스다이어그램, 컨벤션, Notion, 간트차트를 통한 협업</li>
                <li>FrontEnd 페이지 및 공통 컴포넌트 설계 및 구현</li>
                <li>BackEnd 커뮤니티API구현</li>
              </ul>
            </div>

            <div className={'mb-8'}>
              <h2>POST IT (Interactive art : 졸업전시)</h2>
              <p>머신러닝 라이브러리를 활용한 사용자 얼굴 인식 및 입 합성</p>
              <p>
                <strong>📸 200장 이상의 관객 사진 및 SNS 다수 공유</strong>
              </p>
              <ul>
                <li>ml5.js, p5.js, JavaScript</li>
                <li>ml5.js를 활용하여 사용자 얼굴 인식</li>
                <li>다중 사용자 다양한 입👄👅 실시간 합성 </li>
                <li>웹 화면에 합성한 기록 누적</li>
              </ul>
            </div>

            <div className={'mb-8'}>
              <h2>SpaceRockerDelivery</h2>
              <p>Unity, C#을 활용한 멀티 타워디펜스 게임 / 6인 팀</p>
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
          </div>

          <div className="overflow-x-auto"></div>
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

          <p className="underline decoration-blue-400 decoration-4 underline-offset-4">텍스트 내용</p>
        </article>
      </main>
    </>
  );
}
