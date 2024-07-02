import PortfolioCard from './PortfolioCard';
import Image from 'next/image';
import { ProjectType } from '@/app/(portfolio)/portfolio/_components/ProjectsProvider';

const PortfolioProjects = ({ projects1, projects2 }: { projects1: ProjectType[]; projects2: ProjectType[] }) => {
  return (
    <div
      style={{
        animation: 'slideInFromRight 1s ease-out forwards' /* 1초 후에 아래로 이동 시작 */,
      }}
    >
      <h1 className={'mt-48 mb-24 text-center'}>Projects.</h1>
      <ul className={'mx-auto my-12 p-2 max-w-4xl flex flex-col sm:flex-row flex-wrap gap-2'}>
        <li className={'flex-1 flex flex-col gap-2'}>
          {projects1.map((d, i) => (
            <PortfolioCard
              key={i}
              animation={1}
              project={d}
              title={d.title}
              description={d.description}
              position={d?.position}
              ModalComponent={d.ModalComponent}
            >
              <Image
                src={d.image}
                alt={`${d.title} image`}
                // placeholder="blur"
                fill
                objectFit="cover"
                objectPosition="center"
                className={`portfolio-card-img ease-in-out duration-300 hover:scale-105 pointer-events-none`}
              />
            </PortfolioCard>
          ))}
        </li>
        <li className={'flex-1 flex flex-col gap-2'}>
          {projects2.map((d, i) => (
            <PortfolioCard
              key={i}
              animation={0}
              project={d}
              title={d.title}
              description={d.description}
              position={d?.position}
              ModalComponent={d.ModalComponent}
            >
              <Image
                src={d.image}
                alt={`${d.title} image`}
                // placeholder="blur"
                fill
                objectFit="cover"
                objectPosition="center"
                className={`portfolio-card-img ease-in-out duration-300 hover:scale-105 pointer-events-none`}
              />
            </PortfolioCard>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default PortfolioProjects;
