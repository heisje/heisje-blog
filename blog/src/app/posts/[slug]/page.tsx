import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/../.contentlayer/generated';
import * as console from 'console';

export async function generateStaticParams() {
  const a = allPosts.map(({ _raw }) => ({
    // 마크다운 파일의 파일명을 기반으로 id를 지정합니다.
    slug: _raw.flattenedPath,
  }));

  return a;
}

const PostDetailPage = ({ params: { slug } }: any) => {
  const postId = String(slug || '');

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  const MDXComponent = useMDXComponent(post?.body.code || '');

  return (
    <div>
      <h1>{post?.title}</h1>
      <span>{post?.category}</span>
      <MDXComponent />
    </div>
  );
};

export default PostDetailPage;
