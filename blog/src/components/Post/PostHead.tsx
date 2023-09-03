import markdownStyles from './markdown.module.css';
import Head from 'next/head';

export default function PostHead({ meta }: any) {
  return (
    <Head>
      <title>{`${meta.title}`}</title>
      <meta property="og:image" content={meta.ogImage.url} />
    </Head>
  );
}
