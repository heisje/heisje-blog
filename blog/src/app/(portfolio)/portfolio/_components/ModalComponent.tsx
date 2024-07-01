import { allPosts } from '@/contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface ModalComponentProps {
  slug: string;
  github?: string;
}
export const ModalComponent = ({ slug }: ModalComponentProps) => {
  const MDXComponent = useMDXComponent(allPosts.find(({ _raw }) => _raw.flattenedPath === slug)?.body.code || '');

  return (
    <div className={'markdown-body'}>
      <MDXComponent />
    </div>
  );
};
