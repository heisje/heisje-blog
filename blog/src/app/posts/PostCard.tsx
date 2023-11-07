import Image from 'next/image';
import { toDateString } from '@/utils/toDateString';
import Link from 'next/link';

const PostCard = ({ post }: any) => {
  const date: string = toDateString(post?.createdAt);
  const link = post._raw.flattenedPath;

  return (
    <Link
      href={`/posts/${link}`}
      className={
        'block overflow-hidden border border-c-gray-500/20 rounded-2xl my-3 duration-300 transition-origin origin-bottom-left hover:-rotate-1 hover:shadow-xl hover:shadow-c-gray-400/10 cursor-pointer'
      }
    >
      <div className={'rounded-2xl  w-full aspect-video relative'}>
        <Image
          className={'w-full h-full object-cover '}
          src={post?.thumbnail}
          alt={`${post?.title}`}
          width={100}
          height={100}
        />
      </div>
      <div className={'p-4 '}>
        <h1 className={'text-2xl'}>{post?.title}</h1>
        <div className={'text-c-gray-500'}>{post?.description}</div>
        {/*<div>{post?.category}</div>*/}
        <div className={'text-c-gray-500'}>{date}</div>
      </div>
    </Link>
  );
};

export default PostCard;
