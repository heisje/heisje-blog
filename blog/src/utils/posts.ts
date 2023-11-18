import { allPosts, Post } from '@/contentlayer/generated';

// 필요한 PostData자료구조
export type PostsType = {
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
let posts: Post[][] = [];
const categories: Set<string> = new Set(); // category 저장
const tags: Set<string> = new Set(); // tag 저장

const searchPosts: searchPostsType[] = []; // 서치 할 Post내용 저장

// 심볼기반(category, tag)이 key인 Post 페이지네이션
const symbolPosts: PostsType = {
  All: [],
};

// 포스트 정렬
const sortPosts = () => {
  return [...allPosts].sort(function (a, b) {
    const dateA: Date = new Date(a?.createdAt);
    const dateB: Date = new Date(b?.createdAt);
    return dateB.getTime() - dateA.getTime(); // 내림차순으로 정렬하려면 b - a
  });
};

// 포스트 카테고리 분석
const searchCategoryPosts = () => {
  return allPosts.reduce((tempCategories: string[], post: Post) => {
    return [...tempCategories, post?.category];
  }, []);
};

// 포스트 태그 분석
export const searchTagPosts = () => {
  return allPosts.reduce((tempTags: string[], post: Post) => {
    const temp = post?.tags || [];
    return [...tempTags, ...temp];
  }, []);
};

// 전체 포스트 페이지네이션
const slicePosts = (posts: Post[]): Post[][] => {
  const result: Post[][] = [];
  const temp = [...posts];
  for (let i = 0; i < temp.length; i += postSize) {
    result.push(temp.slice(i, i + postSize));
  }
  return result;
};

// 카테고리 및 태그 기반 페이지네이션
const sliceSymbolPosts = () => {
  const tempPosts: Post[] = sortPosts(); // 정렬된 Posts를 가져옴
  const symbols: string[] = [...getTags(), ...getCategory()]; // 카테고리와 태그들을 가져옴

  const temp = [...tempPosts];
  for (let i = 0; i < temp.length; i += postSize) {
    symbolPosts['All'].push(temp.slice(i, i + postSize));
  }

  // category나 tags가 존재하면 필터에 포함시킨 뒤 페이지네이션 배열을 추가한다.
  symbols.forEach((symbol: string) => {
    symbolPosts[symbol] = [];
    const temp = tempPosts.filter((post) => {
      if (post?.tags) {
        const tagsArray = Array.isArray(post.tags) ? post.tags : [post.tags];
        return post.category === symbol || tagsArray.includes(symbol);
      }
      return post.category === symbol;
    });
    for (let i = 0; i < temp.length; i += postSize) {
      symbolPosts[symbol].push(temp.slice(i, i + postSize));
    }
  });
};

// 전체 포스트 참조
export const getPosts = () => {
  if (!posts.length) {
    const temp = sortPosts();
    posts = slicePosts(temp);
  }
  return posts;
};

// 전체 태그 참조
export const getTags = () => {
  if (!tags.size) {
    searchTagPosts().forEach((tag) => {
      tags.add(tag);
    });
  }
  return Array.from(tags);
};

// 전체 카테고리 참조
export const getCategory = () => {
  if (!categories.size) {
    searchCategoryPosts().forEach((category) => {
      categories.add(category);
    });
  }
  return Array.from(categories);
};

// 검색 심볼들을 내보내기
export const getSymbolPosts = () => {
  if (!symbolPosts['All'].length) {
    sliceSymbolPosts();
  }
  return symbolPosts;
};

// 검색을 위한 포스트 생성
export const getSearchPosts = () => {
  if (!searchPosts.length) {
    const tempPosts: Post[] = sortPosts(); // 정렬된 Posts를 가져옴
    tempPosts.forEach((post) => {
      const tempKeyword: string[] = [post.title, post.description, post.category, ...(post?.tags || [])];
      searchPosts.push({
        url: post._raw.flattenedPath,
        title: post.title,
        description: post.description,
        keywords: tempKeyword.join(' '),
      });
    });
  }
  return searchPosts;
};
