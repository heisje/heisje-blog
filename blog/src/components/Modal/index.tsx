import { HTMLAttributes, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { FiLink, FiX } from 'react-icons/fi';
import { ProjectType } from '@/app/(portfolio)/portfolio/_components/ProjectsProvider';
import { FaGithub } from 'react-icons/fa';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children?: ReactNode;
  project?: ProjectType;
}

const Modal = ({ onClose, children, project }: ModalProps) => {
  return createPortal(
    <div
      className={
        'w-screen h-screen overflow-hidden fixed top-0 left-0 bg-c-gray-100/50 dark:bg-c-gray-800/50 flex justify-center z-20 backdrop-blur-sm cursor-pointer '
      }
      onClick={onClose}
    >
      <div
        className={
          'flex-1 rounded-2xl bg-c-gray-100/95 dark:bg-c-gray-800/95 border border-c-gray-500/50 cursor-default overflow-y-scroll overflow-x-hidden flex-wrap project-modal relative'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <ul className={'sticky  top-0 right-0 flex justify-between'}>
          <h3>{project?.title}</h3>
          <div className={' flex justify-end gap-2'}>
            <a href={'https://github.com/heisje'} target="_blank" rel="noopener noreferrer">
              <li
                onClick={onClose}
                className={
                  'w-10 h-10 text-c-gray-50 bg-c-gray-900 rounded-full flex justify-center items-center cursor-pointer z-50'
                }
              >
                <FaGithub size={'1.5rem'} />
              </li>
            </a>
            <a>
              <li
                onClick={onClose}
                className={
                  'w-10 h-10 text-c-gray-50 bg-c-gray-400 rounded-full flex justify-center items-center cursor-pointer z-50'
                }
              >
                <FiLink size={'1.25rem'} />
              </li>
            </a>

            <li
              onClick={onClose}
              className={
                'w-10 h-10 text-c-gray-50 bg-red-400 rounded-full flex justify-center items-center cursor-pointer z-50'
              }
            >
              <FiX size={'1.25rem'} />
            </li>
          </div>
        </ul>

        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
