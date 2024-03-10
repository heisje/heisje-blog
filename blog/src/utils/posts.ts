import { allPosts, Post } from '@/contentlayer/generated';

// 필요한 PostData자료구조
type PostsType = {
  [tag: string]: Post[][];
};

// 검색에 필요한 자료구조
export type searchPostsType = {
  url: string;
  title: string;
  description: string;
  keywords: string;
};

export const postSize = 5;

// 포스트 정렬
const sortedPosts: Post[] = [...allPosts].sort(function (a, b) {
  return new Date(b.createdAt).getTime() - new Date(a?.createdAt).getTime(); // 내림차순으로 정렬하려면 b - a
});

// 전체 카테고리
const allCategories: string[] = (() => {
  const categoriesSet: Set<string> = new Set();
  sortedPosts.forEach((post) => {
    categoriesSet.add(post?.category);
  });
  return Array.from(categoriesSet);
})();

// 전체 태그
const allTags: string[] = (() => {
  const tags: Set<string> = new Set(); // tag 저장
  sortedPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(tag);
    });
  });
  return Array.from(tags);
})();

// 카테고리 및 태그 기반 페이지네이션
const slicedSymbolPosts = (() => {
  // 심볼기반(category, tag)이 key인 Post 페이지네이션
  const symbolPosts: PostsType = {
    All: [],
  };
  // 모든 포스트를 페이지네이션
  for (let i = 0; i < sortedPosts.length; i += postSize) {
    symbolPosts['All'].push(sortedPosts.slice(i, i + postSize));
  }

  const symbols: string[] = [...allTags, ...allCategories]; // 카테고리와 태그들을 가져옴

  // category나 tags가 존재하면 필터에 포함시킨 뒤 페이지네이션 배열을 추가한다.
  symbols.forEach((symbol: string) => {
    symbolPosts[symbol] = [];
    const temp = sortedPosts.filter((post) => {
      if (post.category === symbol) return true;
      if (post?.tags) return post.tags.includes(symbol);
      // const tagsArray = Array.isArray(post.tags) ? post.tags : [post.tags];
    });

    for (let i = 0; i < temp.length; i += postSize) {
      symbolPosts[symbol].push(temp.slice(i, i + postSize));
    }
  });
  return symbolPosts;
})();

// 검색을 기능을 위한 포스트 mapped 생성
const forSearchPosts = (() => {
  return sortedPosts.reduce<searchPostsType[]>((tempPosts, post) => {
    const tempKeyword: string[] = [post.title, post.description, post.category, ...(post?.tags || [])];
    tempPosts.push({
      url: post._raw.flattenedPath,
      title: post.title,
      description: post.description,
      keywords: tempKeyword.join(' '),
    });
    return tempPosts;
  }, []);
})();

export const posts = {
  forSearchPosts,
  allTags,
  allCategories,
  slicedSymbolPosts,
};
