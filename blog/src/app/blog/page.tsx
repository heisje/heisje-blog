import { getAllPosts } from '@/utils/getAllPosts';
import React from 'react';

export default function Example() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return (
    <>
      <h1>블로그페이지</h1>
      <div>
        {allPosts.map((post) => {
          return (
            <React.Fragment key={post.date}>
              {post.title}
              <h1>slug</h1>
              <div>{post.slug}</div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
