'use client';
import { HTMLAttributes, JSX, useCallback } from 'react';
import useIntersectionObserver from '@/hook/useIntersectionObserver';
import useModal from '@/hook/useModal';
import { ProjectType } from '@/app/(portfolio)/portfolio/_components/ProjectsProvider';

interface PortfolioCardProps extends HTMLAttributes<HTMLLIElement> {
  animation?: number;
  title: string;
  description: string;
  threshold?: number;
  position?: 'top' | 'bottom' | undefined;
  textColor?: 'black' | 'white';
  project: ProjectType;
  ModalComponent?: JSX.Element;
}

const top = {
  top: 'justify-start',
};

export default function PortfolioCard({
  animation = 1,
  title,
  description,
  threshold = 0.1,
  position = 'bottom',
  ModalComponent,
  project,
  children,
  ...props
}: PortfolioCardProps) {
  const { Modal, open, close } = useModal();

  const onIntersect: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`slideUp${animation}`);
        } else {
          entry.target.classList.remove(`slideUp${animation}`);
        }
      });
    },
    [animation],
  );

  const { setTarget } = useIntersectionObserver({ threshold, onIntersect });

  return (
    <>
      <li
        className={`portfolio-card-container p-4 flex flex-col cursor-pointer overflow-hidden bg-c-gray-50 dark:bg-c-gray-800/50 rounded-2xl duration-300 transition-origin origin-center hover:shadow-xl hover:shadow-primary-400/20 border border-c-gray-500/20 opacity-0`}
        ref={setTarget}
        onClick={open}
      >
        <ul className={'flex gap-2 text-sm'}>
          {project.stacks &&
            project.stacks.map((stack) => (
              <li key={stack} className={'border border-c-gray-500/20 rounded px-1'}>
                {stack}
              </li>
            ))}
        </ul>
        <div className={'text-2xl font-bold mt-1'}>{title}</div>
        <div className={'text-sm mt-1'}>{description}</div>
        {project?.etc && (
          <ul className={'list-disc list-inside mb-2'}>
            {project?.etc.map((et, i) => (
              <li key={i} className={'mt-1 text-sm'}>
                {et}
              </li>
            ))}
          </ul>
        )}

        <div className={'mt-1 h-48 w-auto'}>
          <div className={'h-full overflow-hidden relative rounded-xl dark:border-white/5 border-black/10 border'}>
            {children}
          </div>
        </div>
      </li>
      <Modal project={project}>{ModalComponent}</Modal>
    </>
  );
}
