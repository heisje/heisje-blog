'use client';

import { useEffect, useState } from 'react';

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
        요청
      </button>
    </div>
  );
};

export default ViewCounterTest;
