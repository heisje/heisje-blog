import React from 'react';
import PostsPagination from './PostsPagination';

import PostCard from './PostCard';
import { postManager } from '@/model/post';
import Link from 'next/link';

type ParamsType = {
  page?: string;
  symbol?: string;
};

export default function page({ searchParams: { page = '1', symbol = 'All' } }: { searchParams: ParamsType }) {
  const showPosts = postManager.getSlicedSymbolPosts()[symbol][parseInt(page) - 1]; // 보여줄 포스트
  const maxSize = postManager.getSlicedSymbolPosts()[symbol].length; // 페이지네이션 최대 크기
  const labeledPosts = Array.from(postManager.getLabeledPosts().entries());

  return (
    <>
      {/*카테고리*/}
      <aside>
        <ul className={'mt-4'}>
          {labeledPosts.map(([key, value]) => (
            <Link
              key={key}
              className={`inline-block mb-4 mr-2 py-1 px-3 rounded-lg border border-c-gray-500/20 shadow-xl shadow-c-gray-400/5 hover:shadow-primary-400/30 hover:bg-primary/80 hover:text-white transition duration-100 ${
                key === symbol ? 'bg-primary/80 text-white' : 'bg-c-gray-300/5'
              }`}
              href={`/posts?symbol=${key}&page=1`}
            >
              {key}
              <span className={'opacity-40 ml-1'}>{value.postsLength}</span>
            </Link>
          ))}
        </ul>
      </aside>

      {/*카드 리스트*/}
      <article>
        {showPosts?.map((post) => {
          return <PostCard key={post?.title} post={post} />;
        })}
      </article>

      <PostsPagination page={parseInt(page)} maxSize={maxSize} />
    </>
  );
}
