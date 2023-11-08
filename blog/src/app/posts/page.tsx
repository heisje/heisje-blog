import React from 'react';
import BlogPagination from '@/app/posts/BlogPagination';

import PostCard from '@/app/posts/PostCard';
import { getPosts, getTags, searchTagPosts } from '@/utils/posts';

export default function Example({ searchParams }: any) {
  const page = parseInt(searchParams?.page);
  const allPosts = [...getPosts()];
  const showPosts = allPosts[page - 1];
  const maxSize = allPosts.length;
  const allTags = getTags();

  return (
    <>
      <header className={'bg-gradient-to-r from-blue-400 to-blue-500 w-auto h-40 rounded-2xl flex'}>
        <div className={'m-auto text-2xl text-white'}>김희제의 개발 블로그</div>
      </header>
      <div>Tags : {allTags.join(' ')}</div>
      <article>
        {showPosts.map((post) => {
          return <PostCard key={post?.title} post={post} />;
        })}
      </article>

      <BlogPagination page={page} maxSize={maxSize} />
    </>
  );
}
