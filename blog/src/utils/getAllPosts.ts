import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
  // fs 모듈을 통해서 파일 디렉토리를 읽고 __posts 안에 있는 파일들(마크다운)을 가져옵니다.
  return fs.readdirSync(postsDirectory);
}

// 가져온 마크다운 파일을 객체로 변환해서 반환합니다.
export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // 여기서 matter는 마크다운 파일의 front-matter를 파싱해주는 역할을 합니다.
  // matter에 대해서는 아래에서 추가로 설명하겠습니다.
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  // 마크다운 파일들을 모두 가져오고,
  const slugs = getPostSlugs();
  const posts = slugs
    // 객체로 파싱한 뒤에,
    .map((slug) => getPostBySlug(slug, fields))
    // 날짜 순으로 정렬해서 반환해줍니다.
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
