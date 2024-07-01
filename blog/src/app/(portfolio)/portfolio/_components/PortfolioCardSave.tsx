'use client';
import { HTMLAttributes, useCallback } from 'react';
import useIntersectionObserver from '@/hook/useIntersectionObserver';

interface PortfolioCardProps extends HTMLAttributes<HTMLLIElement> {
  animation?: number;
  title: string;
  description: string;
  threshold?: number;
  position?: 'top' | 'bottom' | undefined;
  textColor?: 'black' | 'white';
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
  children,
  ...props
}: PortfolioCardProps) {
  const onIntersect: IntersectionObserverCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      // if (entry.isIntersecting) {
      //   entry.target.classList.add(`slideUp${animation}`);
      // } else {
      //   entry.target.classList.remove(`slideUp${animation}`);
      // }
    });
  }, []);

  const { setTarget } = useIntersectionObserver({ threshold, onIntersect });

  return (
    <li
      key={title}
      className={`portfolio-card-container relative hover:shadow h-96 cursor-pointer overflow-hidden `}
      ref={setTarget}
    >
      {children}
      <div className={`absolute top-0 left-0 w-full flex flex-col`}>
        <div className={'m-3 py-4 px-6 bg-c-gray-50 dark:bg-c-gray-900 shadow-lg hover:opacity-80'}>
          <span className={'text-xs font-light'}>#웹 프로젝트</span>
          <div className={'text-2xl font-bold m-0 '}>{title}</div>
          <div className={'text-sm m-0'}>{description}</div>
        </div>
        {/*{position === 'top' ? null : <div className={'h-12'}></div>}*/}
      </div>
    </li>
  );
}
// ${
//           position === 'top' ? 'justify-start' : 'justify-end'
//         }

// border bg-gradient-to-b from-black/5 to-black/30

// ----------------

// 'use client';
// import { HTMLAttributes, useCallback } from 'react';
// import useIntersectionObserver from '@/hook/useIntersectionObserver';
//
// interface PortfolioCardProps extends HTMLAttributes<HTMLLIElement> {
//   animation?: number;
//   title: string;
//   description: string;
//   threshold?: number;
//   position?: 'top' | 'bottom' | undefined;
//   textColor?: 'black' | 'white';
// }
//
// const top = {
//   top: 'justify-start',
// };
//
// export default function PortfolioCard({
//   animation = 1,
//   title,
//   description,
//   threshold = 0.1,
//   position = 'bottom',
//   children,
//   ...props
// }: PortfolioCardProps) {
//   const onIntersect: IntersectionObserverCallback = useCallback(
//     (entries) => {
//       entries.forEach((entry) => {
//         // if (entry.isIntersecting) {
//         //   entry.target.classList.add(`slideUp${animation}`);
//         // } else {
//         //   entry.target.classList.remove(`slideUp${animation}`);
//         // }
//       });
//     },
//     [animation],
//   );
//
//   const { setTarget } = useIntersectionObserver({ threshold, onIntersect });
//
//   return (
//     <li
//       key={title}
//       className={`portfolio-card-container relative hover:shadow h-96 cursor-pointer overflow-hidden `}
//       ref={setTarget}
//     >
//       {children}
//       <div
//         className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end border-white/5 border`}
//       >
//         <div className={'relative w-full'}>
//           <div className={'absolute left-0 bottom-0 flex flex-col w-full'}>
//             <div className={'m-3 py-4 px-6 bg-white/95 shadow-lg '}>
//               <div className={'text-2xl font-bold text-black m-0 '}>{title}</div>
//               <div className={'text-sm text-black/70  m-0'}>{description}</div>
//             </div>
//           </div>
//           {/*<button className={'px-4 py-1.5 bg-blue-500 rounded-full text-sm text-white hover:bg-blue-600'}>*/}
//           {/*  더 알아보기*/}
//           {/*</button>*/}
//         </div>
//
//         {/*{position === 'top' ? null : <div className={'h-12'}></div>}*/}
//       </div>
//     </li>
//   );
// }
// // ${
// //           position === 'top' ? 'justify-start' : 'justify-end'
// //         }
//
// // border bg-gradient-to-b from-black/5 to-black/30
