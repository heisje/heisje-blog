import { getAllPosts, getPostBySlug, getPostSlugs } from '@/utils/getAllPosts';
import Post from '@/interfaces/post';
import markdownToHtml from '@/utils/markdownToHtml';
import Head from 'next/head';
import React from 'react';
import PostBody from '@/components/Post/postBody';
import PostHead from '@/components/Post/PostHead';

type Props = {
  params: { slug: string };
};
export default async function Blog({ params: { slug } }: Props) {
  const meta = getPostBySlug(slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(meta.content || '');
  return (
    <>
      <PostHead meta={meta} />
      <PostBody content={content} />
    </>
  );
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
