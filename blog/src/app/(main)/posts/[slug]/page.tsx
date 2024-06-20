import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/../.contentlayer/generated';
import Image from 'next/image';
import PostComment from './PostComment';
import { Metadata, ResolvingMetadata } from 'next';
import * as process from 'process';
import { rootURL } from '@/constants';
import PostCounter from '@/app/(main)/posts/[slug]/PostCounter';
import { toDateString } from '@/utils/toDateString';
import { Pretendard } from '@/app/_fonts/localFonts';

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

  // 날짜
  const date: string = toDateString(new Date(post?.createdAt || ''));

  return (
    <article>
      <div className={'mt-4'}>
        <span className={'font-bold'}>{post?.category}.</span>
        {/*태그*/}
      </div>
      <h1 className={'block my-3'}>{post?.title}</h1>

      <div className={'text-c-gray-500/70 flex justify-between'}>
        <span>{date}</span>
        <span>작성자 김희제</span>
      </div>

      <div className={`mb-3 py-2 border-b`}>
        {post?.tags
          ? post?.tags.map((tag) => {
              return (
                <div
                  className={'inline-block mr-2 py-0 px-2 rounded-xl border bg-c-gray-300/5 border-c-gray-500/20'}
                  key={tag}
                >
                  {tag}
                </div>
              );
            })
          : null}
      </div>

      {post?.thumbnail && (
        <div className={'mb-8 w-full h-full object-cover rounded-2xl'}>
          <Image src={`${post?.thumbnail}`} alt={`${post?.title}`} width={608} height={608} />
        </div>
      )}

      <div className={`${Pretendard.className} mt-10 markdown-body`}>
        <MDXComponent />
      </div>

      {!process?.env?.IS_LOCAL ? <PostComment /> : <div>DevMode</div>}
      <PostCounter slug={slug} />
    </article>
  );
};

export default PostDetailPage;
