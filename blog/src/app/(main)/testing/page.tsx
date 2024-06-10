import { allPosts } from '@/contentlayer/generated';

const TestingPage = () => {
  return (
    <section>
      {JSON.stringify(allPosts)}
      {/*<ViewCounterTest />*/}
    </section>
  );
};

export default TestingPage;
