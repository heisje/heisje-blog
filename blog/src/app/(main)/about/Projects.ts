export type projectType = {
  title: string;
  description: string;
  date: string;
  tech: string;
  my: string;
  result: string;
  details: string[];
};

export const zippyZiggyText: projectType = {
  title: '지피지기',
  description: '',
  date: '2023.5 (6주)',
  my: 'FrontEnd',
  tech: '',
  result: '',
  details: ['300명 베타테스터를 대상으로 Jennifer Front를 사용한 모니터링, JS에러 0건을 6개월 유지'],
};

export const tonnyBunnyText: projectType = {
  title: '토니버니',
  description: '통역도 콜택시처럼 쉽게하자! (실시간/예약 통역, 번역기능)',
  date: '2023.01.03 ~ 2023.02.17 (7주) ',
  my: 'FrontEnd, BackEnd',
  tech: 'Vue, Vuex, SCSS, JavaScript, Spring Boot, JPA',
  result: '🏆 공통 프로젝트 우수상 (8팀 중 3등) (SSAFY)',
  details: [
    '63개의 페이지를 공통 컴포넌트를 통해 4주만에 제작',
    '공통 컴포넌트 인자별 공유 페이지를 통한 원활한 협업',
    'Figma, ERD, 시퀀스다이어그램, 컨벤션, Notion, 간트차트를 통한 협업',
    'FrontEnd 페이지 및 공통 컴포넌트 설계 및 구현',
    'BackEnd 커뮤니티API구현',
  ],
};
