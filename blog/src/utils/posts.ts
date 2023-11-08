import { allPosts, Post } from '@/contentlayer/generated';

const postSize = 2;
let posts: Post[][] = [];
let tags: string[] = [];

// 포스트 정렬
const sortPosts = () => {
  return [...allPosts].sort(function (a, b) {
    const dateA: Date = new Date(a?.createdAt);
    const dateB: Date = new Date(b?.createdAt);
    return dateB.getTime() - dateA.getTime(); // 내림차순으로 정렬하려면 b - a
  });
};

// 포스트 카테고리 분석
const searchCategoryPosts = () => {};

// 포스트 태그 분석
export const searchTagPosts = () => {
  return allPosts.reduce((tags: string[], post: Post) => {
    const temp = post?.tags || [];
    return [...tags, ...temp];
  }, []);
};

// 전체 포스트 제작
const slicePosts = (posts: Post[]): Post[][] => {
  const result: Post[][] = [];
  const temp = [...posts];
  for (let i = 0; i < temp.length; i += postSize) {
    result.push(temp.slice(i, i + postSize));
  }
  return result;
};

// 전체 포스트 참조
export const getPosts = () => {
  if (!posts.length) {
    const temp = sortPosts();
    posts = slicePosts(temp);
  }
  return posts;
};

export const getTags = () => {
  if (!tags.length) {
    tags = searchTagPosts();
  }
  return tags;
};
