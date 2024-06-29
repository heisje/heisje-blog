import PortfolioCard from '@/app/(portfolio)/portfolio/PortfolioCard';
import Image, { StaticImageData } from 'next/image';
import pokelogImg from '@public/medias/pokecal.png';
import zippyImg from '@public/medias/zippyziggy.gif';
import aboutTitleImg from '@public/images/aboutTitle.png';

type dataType = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  position?: 'top' | 'bottom';
};

const data: dataType[] = [
  {
    title: 'Poke type Calculator',
    description: '포켓몬 타입 계산기',
    image: pokelogImg,
    link: '',
    position: 'top',
  },
  {
    title: '지피지기',
    description: 'Chat-GPT 프롬프트 공유',
    image: zippyImg,
    link: '',
  },
  {
    title: '지금 여기 블로그',
    description: '이 블로그입니다...',
    image: aboutTitleImg,
    link: '',
  },
  {
    title: '지금 여기 블로그',
    description: '이 블로그입니다...',
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

const PortfolioProjects = () => {
  return (
    <div
      className={''}
      style={{
        animation: 'slideInFromRight 1s ease-out forwards' /* 1초 후에 아래로 이동 시작 */,
      }}
    >
      <h1 className={'mt-48 mx-4 text-center'}>Projects.</h1>
      <ul className={'mx-auto my-12 p-2 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-2'}>
        {data.map((d, i) => (
          <PortfolioCard animation={i % 2} key={i} title={d.title} description={d.description} position={d?.position}>
            <Image
              src={d.image}
              alt={`${d.title} image`}
              // placeholder="blur"
              fill
              objectFit="cover"
              objectPosition="center"
              className={`portfolio-card-img ease-in-out duration-300 hover:scale-105 pointer-events-none`}
              // className={`portfolio-card-img absolute left-0 top-0 ease-in-out duration-300 hover:scale-105 pointer-events-none dark:border-white/5 border-black/10 border`}
            />
          </PortfolioCard>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioProjects;
