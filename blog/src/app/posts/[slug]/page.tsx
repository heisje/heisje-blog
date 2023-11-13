import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/../.contentlayer/generated';
import Image from 'next/image';
import PostComment from '@/app/posts/[slug]/PostComment';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams() {
  // 마크다운 파일의 파일명을 기반으로 Slug를 지정합니다.
  return allPosts.map(({ _raw }): { slug: string } => ({
    slug: _raw.flattenedPath,
  }));
}

type Props = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const postId = String(params.slug || '');

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });
  return {
    title: `${post?.title}`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

const PostDetailPage = ({ params: { slug } }: any) => {
  const postId: string = slug;

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  const MDXComponent = useMDXComponent(post?.body.code || '');

  return (
    <div className={'markdown-body'}>
      <Image
        className={'w-full h-full object-cover '}
        src={`${post?.thumbnail}`}
        alt={`${post?.title}`}
        width={100}
        height={100}
      />
      <MDXComponent />

      <PostComment />
    </div>
  );
};

export default PostDetailPage;
