import PortfolioProjects from '@/app/(portfolio)/portfolio/_components/PortfolioProjects';
import { StaticImageData } from 'next/image';
import pokelogImg from '@public/assets/projects/pokecal/pokecal.png';
import zippyImg from '@public/assets/projects/zippyziggy/zippyziggy.gif';
import spaceImg from '@public/assets/projects/space/spacemain.gif';
import tonnybunnyImg from '@public/assets/projects/tonnybunny/Untitled 1.png';
import project20Img from '@public/assets/projects/project20/Untitled.png';
import mokuImg from '@public/assets/projects/mokudaku/Untitled.png';
import blogImg from '@public/assets/projects/blog/Untitled.png';
import tossImg from '@public/assets/projects/toss/Untitled.png';
import postItImg from '@public/assets/projects/postit/Untitled.png';

import { ModalComponent } from '@/app/(portfolio)/portfolio/_components/ModalComponent';
import { JSX } from 'react';

export type ProjectType = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  stacks: string[];
  position?: 'top' | 'bottom';
  ModalComponent?: JSX.Element;
};

const ProjectsProvider = () => {
  const PROJECTS_1: ProjectType[] = [
    {
      title: '지피지기',
      description: 'Chat-GPT 프롬프트 공유',
      image: zippyImg,
      link: '',
      stacks: ['Next.js', 'TypeScript'],
      ModalComponent: <ModalComponent slug={'projects-zippyziggy'} />,
    },
    {
      title: '토스 주식 UI 클론 코딩',
      description: '토스 주식을 클론하며 편한 협업 방안 찾기',
      image: tossImg,
      link: '',
      stacks: ['React.js', 'Storybook'],
      ModalComponent: <ModalComponent slug={'projects-toss'} />,
    },
    {
      title: 'Space Rocket Delivery',
      description: '타워디펜스 게임',
      image: spaceImg,
      link: '',
      stacks: ['Unity', 'C#'],
      ModalComponent: <ModalComponent slug={'projects-space'} />,
    },
    {
      title: 'POST-IT (부산대학교 졸업전시)',
      description: '얼굴 인식 기술을 활용한 인터렉티브 아트 웹',
      image: postItImg,
      link: '',
      stacks: ['ml5.js', 'p5.js'],
      ModalComponent: <ModalComponent slug={'projects-postit'} />,
    },
    {
      title: '[디자이너로 참여] 모꾸다꾸',
      description: '5,000명이 사용한 다이어리 꾸미기 앱',
      image: mokuImg,
      link: '',
      stacks: ['UI/UX 디자인'],
      ModalComponent: <ModalComponent slug={'projects-mokudaku'} />,
    },
  ];

  const PROJECTS_2: ProjectType[] = [
    {
      title: '개인 블로그',
      description: 'Next.js로 구축한 개인 블로그',
      image: blogImg,
      link: '',
      stacks: ['Next.js', 'TypeScript'],
      ModalComponent: <ModalComponent slug={'projects-blog'} />,
    },
    {
      title: '토니버니',
      description: '통역번역 중계 플랫폼',
      image: tonnybunnyImg,
      link: '',
      stacks: ['Vue.js', 'Spring Boot'],
      ModalComponent: <ModalComponent slug={'projects-tonnybunny'} />,
    },
    {
      title: '20. (영화추천 서비스)',
      description: '영화 추천 서비스',
      image: project20Img,
      link: '',
      stacks: ['Vue.js', 'Django'],
      ModalComponent: <ModalComponent slug={'projects-20'} />,
    },
    {
      title: 'Poke type Calculator',
      description: '포켓몬 타입 계산기 확장 프로그램',
      image: pokelogImg,
      link: '',
      stacks: ['React.js', 'StyledComponent'],
      ModalComponent: <ModalComponent slug={'projects-pokecal'} />,
    },
  ];

  return <PortfolioProjects projects1={PROJECTS_1} projects2={PROJECTS_2} />;
};

export default ProjectsProvider;
