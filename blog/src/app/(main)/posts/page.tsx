import React from 'react';
import PostsPagination from './PostsPagination';

import PostCard from './PostCard';
import { postsData } from '@/utils/posts';
import Link from 'next/link';

export default function page({ searchParams }: any) {
  // 페이지네이션 param
  const paramPage = parseInt(searchParams?.page);
  // 검색어 / default = 'all'
  const paramSymbol = searchParams?.symbol || 'All';

  // 전체 검색어 정렬 포스트
  const symbolPosts = postsData.getSymbolPosts;
  const showPosts = symbolPosts[paramSymbol][paramPage - 1];
  const maxSize = symbolPosts[paramSymbol].length;

  // 모든 태그들
  const allTags = postsData.getTags;
  const categories = postsData.getCategories;
  const allSymbols = Array.from(new Set(['All', ...allTags, ...categories]));

  return (
    <>
      {/*카테고리*/}
      <aside>
        <ul className={'mt-4'}>
          {allSymbols.map((symbol) => (
            <Link
              key={symbol}
              className={`inline-block mb-4 mr-2 py-1 px-3 rounded-lg border border-c-gray-500/20 shadow-xl shadow-c-gray-400/5 hover:shadow-primary-400/30 hover:bg-primary/80 hover:text-white transition duration-100 ${
                paramSymbol === symbol ? 'bg-primary/80 text-white' : 'bg-c-gray-300/5'
              }`}
              href={`/posts?symbol=${symbol}&page=1`}
            >
              {symbol}
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

      <PostsPagination page={paramPage} maxSize={maxSize} />
    </>
  );
}
