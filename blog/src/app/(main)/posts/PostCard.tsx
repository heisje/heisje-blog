import Image from 'next/image';
import { toDateString } from '@/utils/toDateString';
import Link from 'next/link';
import { Post } from '@/contentlayer/generated';

const PostCard = ({ post }: { post: Post }) => {
  const date: string = toDateString(new Date(post?.createdAt));
  const link = post._raw.flattenedPath;

  return (
    <Link
      href={`/posts/${link}`}
      className={
        'block overflow-hidden border border-c-gray-500/20 rounded-xl mb-6 duration-300 transition-origin origin-bottom-left hover:-rotate-1 hover:shadow-xl hover:shadow-primary-400/10 cursor-pointer'
      }
    >
      {/*썸네일*/}
      {post?.thumbnail ? (
        <div className={'rounded-2xl  w-full relative'} style={{ aspectRatio: 2.5 }}>
          <Image
            className={'w-full h-full object-cover '}
            src={post?.thumbnail}
            alt={`${post?.title}`}
            width={608}
            height={608}
          />
        </div>
      ) : null}

      {/*텍스트*/}
      <div className={'p-4 '}>
        {/*카테고리*/}
        <div className={'mb-1 flex justify-between'}>
          <div>{post?.category}</div>
          <div className={'text-c-gray-500'}>{date}</div>
        </div>
        {/*제목*/}
        <h1 className={'text-2xl font-medium'}>{post?.title}</h1>
        {/*설명*/}
        <div className={'text-c-gray-500'}>{post?.description}</div>
        {/*태그*/}
        {post?.tags ? (
          <div className={'mt-2'}>
            {post?.tags?.map((tag) => {
              return (
                <div
                  className={'inline-block mr-2 py-0 px-2 rounded-xl border bg-c-gray-300/5 border-c-gray-500/20'}
                  key={tag}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default PostCard;
