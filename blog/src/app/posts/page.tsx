import React from 'react';
import BlogPagination from '@/app/posts/BlogPagination';

import PostCard from '@/app/posts/PostCard';
import { getCategory, getSymbolPosts, getTags, searchTagPosts } from '@/utils/posts';
import Link from 'next/link';

export default function page({ searchParams }: any) {
  const paramPage = parseInt(searchParams?.page); // pagination param
  const paramSymbol = searchParams?.symbol || 'All'; // symbol default = 'all'

  const symbolPosts = getSymbolPosts();
  const showPosts = symbolPosts[paramSymbol][paramPage - 1];
  const maxSize = symbolPosts[paramSymbol].length;

  const allTags = getTags();
  const categories = getCategory();
  const allSymbols = ['All', ...allTags, ...categories];

  return (
    <>
      {/*블로그 소개글*/}
      <header className={'flex h-48 items-center border border-c-gray-500/20 rounded-2xl'}>
        <div className="mx-auto text-3xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            김희제의 개발 블로그
          </span>
        </div>
      </header>

      {/*카테고리*/}
      <aside>
        <ul className={'my-4'}>
          {allSymbols.map((symbol) => (
            <Link
              key={symbol}
              className={`inline-block mr-2 py-1 px-3 rounded-xl ${
                paramSymbol === symbol ? 'bg-primary/80 text-white' : 'bg-c-gray-400/10'
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

      <BlogPagination page={paramPage} maxSize={maxSize} />
    </>
  );
}
