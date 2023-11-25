import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/../.contentlayer/generated';
import Image from 'next/image';
import PostComment from './PostComment';
import { Metadata, ResolvingMetadata } from 'next';
import * as process from 'process';
import { rootURL } from '@/utils/rootURL';
import PostCounter from '@/app/(main)/posts/[slug]/PostCounter';

/*
 * mdx slug를 기반으로 params SSG 생성
 * */
export async function generateStaticParams() {
  return allPosts.map(({ _raw }): { slug: string } => ({
    slug: _raw.flattenedPath,
  }));
}

type Props = {
  params: { slug: string };
};

/*
 * 메타데이터 생성 함수
 * */
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const postId: string = params.slug;

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    title: `${post?.title} | heisje Dev`,
    description: `[${post?.category}] ${post?.description}`,
    openGraph: {
      images: [`${rootURL}${post?.thumbnail}`],
    },
  };
}

const PostDetailPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const postId: string = slug;

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => _raw.flattenedPath === postId);

  const MDXComponent = useMDXComponent(post?.body.code || '');

  return (
    <div className={'markdown-body'}>
      {post?.thumbnail && (
        <Image
          className={'w-full h-full object-cover rounded-2xl'}
          src={`${post?.thumbnail}`}
          alt={`${post?.title}`}
          width={100}
          height={100}
        />
      )}
      <MDXComponent />

      {!process?.env?.IS_LOCAL ? <PostComment /> : <div>DevMode</div>}
      <PostCounter slug={slug} />
    </div>
  );
};

export default PostDetailPage;
