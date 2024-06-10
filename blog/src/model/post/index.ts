import { allPosts, Post } from '@/contentlayer/generated';
import { chunkArray } from '@/utils/chunkArray';

// 필요한 자료구조 정의
type PostsType = {
  [tag: string]: Post[][];
};

export type SearchPostsType = {
  url: string;
  title: string;
  description: string;
  keywords: string;
};

export class PostManager {
  private readonly postSize = 5;
  private readonly sortedPosts: Post[];
  private readonly allTags: string[];
  private readonly allCategories: string[];
  private readonly slicedSymbolPosts: PostsType;
  private readonly forSearchPosts: SearchPostsType[];

  constructor() {
    this.sortedPosts = this.sortPosts();
    this.allTags = this.computeAllTags();
    this.allCategories = this.computeAllCategories();
    this.slicedSymbolPosts = this.slicePostsBySymbol();
    this.forSearchPosts = this.prepareSearchPosts();
  }

  private sortPosts(): Post[] {
    return [...allPosts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // 전체 포스트 태그 수집
  private computeAllTags(): string[] {
    const tags = new Set<string>();
    this.sortedPosts.forEach((post) => post.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }

  // 전체 포스트 카테고리 수집
  private computeAllCategories(): string[] {
    const categoriesSet = new Set<string>();
    this.sortedPosts.forEach((post) => categoriesSet.add(post.category));
    return Array.from(categoriesSet);
  }

  // 전체 포스트를 심볼 별로 잘라 페이지네이션 용도로 만들기
  private slicePostsBySymbol(): PostsType {
    const symbolPosts: PostsType = { All: [] };
    symbolPosts['All'] = chunkArray(this.sortedPosts, this.postSize);

    const symbols = [...this.allTags, ...this.allCategories];
    symbols.forEach((symbol) => {
      const filteredPosts = this.sortedPosts.filter((post) => post.category === symbol || post.tags?.includes(symbol));
      symbolPosts[symbol] = chunkArray(filteredPosts, this.postSize);
    });
    return symbolPosts;
  }

  // 전체 포스트를 검색용도로 만들기
  private prepareSearchPosts(): SearchPostsType[] {
    return this.sortedPosts.reduce<SearchPostsType[]>((tempPosts, post) => {
      const tempKeyword = [post.title, post.description, post.category, ...(post.tags || [])];
      tempPosts.push({
        url: post._raw.flattenedPath,
        title: post.title,
        description: post.description,
        keywords: tempKeyword.join(' '),
      });
      return tempPosts;
    }, []);
  }

  // 내보내기용 public 메소드
  public getPostsForSearch(): SearchPostsType[] {
    return this.forSearchPosts;
  }

  public getAllTags(): string[] {
    return this.allTags;
  }

  public getAllCategories(): string[] {
    return this.allCategories;
  }

  public getSlicedSymbolPosts() {
    return this.slicedSymbolPosts;
  }

  public getAllSymbols() {
    return Object.keys(this.slicedSymbolPosts);
  }
}

// 클래스 사용 예시
export const postManager = new PostManager();
