'use client';

import { useState } from 'react';

const ViewCounterTest = () => {
  const [slug, setSlug] = useState('markdown');
  const [count, setCount] = useState(0);

  async function viewCounterApi() {
    try {
      const response = await fetch(`/api/posts/${slug}`, { method: 'GET' });
      const result = await response.json();
    } catch (e) {
      console.log('조회수 Get 실패');
    }
  }

  async function onClickButton() {
    console.log(`'${slug}'로직 ${count}반복`);
    console.time();
    for (let i = 0; i < count; i++) {
      await viewCounterApi();
    }
    console.timeEnd();
  }

  async function viewTestCounterApi() {
    try {
      const response = await fetch(`/api/testPosts/${slug}`, { method: 'GET' });
      const result = await response.json();
    } catch (e) {
      console.log('조회수 Get 실패');
    }
  }

  async function onClickTestButton() {
    console.log(`'[커넥션 유지 테스트] ${slug}'로직 ${count}반복`);
    console.time();
    for (let i = 0; i < count; i++) {
      await viewTestCounterApi();
    }
    console.timeEnd();
  }

  return (
    <div>
      <input
        type="text"
        value={slug}
        onChange={(e) => {
          setSlug(e.target.value);
        }}
      />
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
      <button className={'bg-c-gray-400'} onClick={onClickButton}>
        기본 요청
      </button>
      <button className={'bg-c-gray-400'} onClick={onClickTestButton}>
        test 요청
      </button>
    </div>
  );
};

export default ViewCounterTest;
