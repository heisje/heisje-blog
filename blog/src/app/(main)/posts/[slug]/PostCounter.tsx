'use client';

import React, { useEffect, useState } from 'react';

// 조회수를 표시한다.
const PostCounter = ({ slug }: { slug: string }) => {
  const [viewCount, setViewCount] = useState(0); // 조회수

  // 조회수를 가져온다.
  useEffect(() => {
    // 조회수를 가져온다.
    async function countFetch(slug: string) {
      const visitedSlugs = JSON.parse(localStorage.getItem('visited-slugs') || '{}');

      // 조회 이력이 있으면
      if (slug in visitedSlugs) {
        try {
          const response = await fetch(`/api/posts/${slug}`, { method: 'GET' });
          const result = await response.json();
          setViewCount(result.viewCount);
        } catch (e) {
          console.log('조회수 Get 실패');
        }
      }

      // 조회 이력이 없으면
      if (!(slug in visitedSlugs)) {
        // 조회처리
        visitedSlugs[slug] = 1;
        localStorage.setItem('visited-slugs', JSON.stringify(visitedSlugs));
        try {
          const response = await fetch(`/api/posts/${slug}`, { method: 'POST' });
          const result = await response.json();
          setViewCount(result.viewCount);
        } catch (e) {
          console.log('조회수 Post 실패');
        }
        return;
      }
    }

    countFetch(slug);
  }, [slug]);
  return <div>조회수: {viewCount}</div>;
};

export default PostCounter;
