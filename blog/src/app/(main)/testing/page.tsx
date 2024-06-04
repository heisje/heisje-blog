import { posts } from '@/utils/posts';

const TestingPage = () => {
  return (
    <section>
      {JSON.stringify(posts)}
      {/*<ViewCounterTest />*/}
    </section>
  );
};

export default TestingPage;
