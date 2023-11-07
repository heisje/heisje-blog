import React from 'react';
import BlogPagination from '@/app/posts/BlogPagination';
import { allPosts } from '@/../.contentlayer/generated';
import PostCard from '@/app/posts/PostCard';

export default function Example() {
  return (
    <>
      <header className={'bg-gradient-to-r from-blue-400 to-blue-500 w-auto h-40 rounded-2xl flex'}>
        <div className={'m-auto text-2xl text-white'}>김희제의 개발 블로그</div>
      </header>
      <main>
        {allPosts.map((post) => {
          return <PostCard key={post?.title} post={post} />;
        })}
      </main>

      <BlogPagination />
    </>
  );
}
