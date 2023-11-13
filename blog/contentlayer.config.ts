// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴

  // mdx로 작성한 글 정보에 대해 입력해야하는 필드 정의
  /*
    [필드명]: {
      type: '자료형',
      required: '필수여부',
    }
  */
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: './posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkBreaks, // 자동 공백
    ],
    rehypePlugins: [
      rehypeSlug, // rehypeAuto의 상위 의존
      [rehypeAutolinkHeadings, { behavior: 'append' }], // 자동 헤드 링크 추가
      [
        rehypePrettyCode as any,
        {
          theme: 'github-dark',
        },
      ], // 코드 테마
      highlight, // 코드 테마
    ],
  },
});

export default contentSource;
