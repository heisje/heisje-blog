import Head from 'next/head';
import { AboutTexts } from '@/texts/about';

const AboutMeta = () => {
  return (
    <Head>
      <meta name="author" content="heisje" />
      <meta name="keywords" content={AboutTexts.keywords} />
      <meta property="og:title" content={AboutTexts.title} />
      <meta name="description" content={AboutTexts.description} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={AboutTexts.description} />
      {/*<meta property="og:image" content="" />*/}
      {/*<meta property="og:image:width" content="600" />*/}
      {/*<meta property="og:image:height" content="315" />*/}
      <meta property="og:url" content="https://heisje.site" />
    </Head>
  );
};

export default AboutMeta;
