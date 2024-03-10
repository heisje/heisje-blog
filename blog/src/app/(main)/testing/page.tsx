import ViewCounterTest from '@/app/(main)/testing/ViewCounterTestButton';
import { postsData } from '@/utils/posts';

const TestingPage = () => {
  return (
    <section>
      {JSON.stringify(postsData)}
      {/*<ViewCounterTest />*/}
    </section>
  );
};

export default TestingPage;
