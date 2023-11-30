// MongoDB 클라이언트의 Promise를 가져옵니다.
import clientPromise from '@/lib/mongo/index';
import { Collection, Db } from 'mongodb';

// MongoDB 클라이언트, 데이터베이스, 그리고 컬렉션을 위한 변수 선언
let client;
let posts: Collection;

// MongoDB 데이터베이스 연결을 초기화하는 함수
async function init() {
  // 이미 데이터베이스 연결이 있다면 초기화를 생략합니다.
  if (posts) return;

  try {
    // MongoDB 클라이언트에 연결을 시도합니다.
    client = await clientPromise;
    // 'slug' 컬렉션을 가져옵니다.
    posts = client.db('posts').collection('slug');
  } catch (error) {
    // 데이터베이스 연결에 실패한 경우 오류를 던집니다.
    throw new Error('Failed to establish connection to database');
  }
}

// 즉시 실행되는 익명 함수를 통해 데이터베이스 연결을 초기화합니다.
(async () => {
  await init();
})();

// slug를 기반으로 특정 포스트를 가져오는 함수
export async function getPosts(slug: string) {
  try {
    // posts 컬렉션이 초기화되지 않았다면 초기화를 진행합니다.
    if (!posts) await init();

    // 주어진 slug에 해당하는 문서를 찾습니다.
    // 여기서 '_slug'는 실제 필드 이름이어야 합니다.
    const result = await posts.findOne({ _slug: slug });

    // 조회된 문서의 viewCount를 반환하거나, 없다면 0을 반환합니다.
    return { viewCount: result?.viewCount || 0 };
  } catch (e) {
    // 조회에 실패한 경우 오류 메시지를 반환합니다.
    return { error: 'Failed to fetch posts!' };
  }
}
