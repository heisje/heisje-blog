// import { allPosts, Post } from '@/contentlayer/generated';
//
// // 필요한 PostData자료구조
// export type PostsType = {
//   [tag: string]: Post[][];
// };
//
// // 검색에 필요한 자료구조
// type searchPostsType = {
//   url: string;
//   title: string;
//   description: string;
//   keywords: string;
// };
//
// export class Posts {
//   private static instance: Posts;
//   private static posts: Post[][] = [];
//   private static postSize: number = 5;
//   private static categories: Set<string> = new Set();
//   private static tags: Set<string> = new Set();
//   private static searchPosts: searchPostsType[] = [];
//   private static symbolPosts: PostsType = {};
//
//   static getSymbolPosts = () => {
//     if (!this.symbolPosts['All'].length) {
//       // sliceSymbolPosts();
//     }
//     return this.symbolPosts;
//   };
// }
