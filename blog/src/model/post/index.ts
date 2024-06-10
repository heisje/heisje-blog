import { allPosts, Post } from '@/contentlayer/generated';
import { chunkArray } from '@/utils/chunkArray';

/*
최종적으로 필요한 데이터
1. 포스팅을 위해 태그를 key로 가진 페이지네이션 정보
2. 검색을 위해 태그를 key로 가진 페이지네이션 정보
3. 태그별 게시글 개수
따라서
{
  tag:{ posts:[Post, Post, ...], pageMaxLength:1, postsLength:5},
  tag:{ posts:[Post, Post, ...], pageMaxLength:1, postsLength:5},
}
이렇게 가지고 있는 것이 좋긴하다.
임시적으로 아래처럼만 가지고 있자
{
  tag:{ postsLength : 5 },
  tag:{ postsLength : 5 },
}
*/
interface LabeledPostType {
  postsLength: number;
  posts: Post[];
}
type LabeledPostsMap = Map<string, LabeledPostType>;

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
  private readonly labeledPosts: Map<string, LabeledPostType>;
  private readonly allTags: string[];
  private readonly allCategories: string[];
  private readonly slicedSymbolPosts: PostsType;
  private readonly forSearchPosts: SearchPostsType[];

  constructor() {
    this.sortedPosts = this.sortPosts();
    this.labeledPosts = this.labelPosts();
    this.allTags = this.computeAllTags();
    this.allCategories = this.computeAllCategories();
    this.slicedSymbolPosts = this.slicePostsBySymbol();
    this.forSearchPosts = this.prepareSearchPosts();
  }

  private sortPosts(): Post[] {
    return [...allPosts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  private labelPosts(): LabeledPostsMap {
    const sortedPosts = this.sortedPosts;
    const result: LabeledPostsMap = new Map();
    result.set('All', { postsLength: 0, posts: [] });

    // 모든 포스트의 모든 라벨을 반복하며 result로 매핑함
    sortedPosts.forEach((post) => {
      const allLabels = new Set([post.category, ...(post.tags || [])]);

      // 전체 값에 추가
      const tempAllData = result.get('All') as LabeledPostType;
      tempAllData.postsLength += 1;
      tempAllData.posts.push(post);
      result.set('All', tempAllData);

      allLabels.forEach((label) => {
        if (!result.has(label)) {
          result.set(label, { postsLength: 0, posts: [] });
        }
        // 라벨에 추가
        const labelData = result.get(label) as LabeledPostType;
        labelData.postsLength += 1;
        labelData.posts.push(post);
        result.set(label, labelData);
      });
    });

    return result;
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

  public getSlicedSymbolPosts() {
    return this.slicedSymbolPosts;
  }

  public getAllSymbols() {
    return Object.keys(this.slicedSymbolPosts);
  }

  public getLabeledPosts() {
    return this.labeledPosts;
  }
}

// 클래스 내보내기
export const postManager = new PostManager();
