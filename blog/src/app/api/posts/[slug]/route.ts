import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/mongo/posts';

// HTTP GET 요청을 처리하는 함수를 정의합니다.
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { viewCount, error } = await getPosts(params.slug);

    if (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }

    // 오류가 없다면 조회수를 응답으로 반환합니다.
    return NextResponse.json({ viewCount: viewCount });
  } catch (e) {
    // 서버 내부에서 예외가 발생하면, 내부 서버 오류 메시지를 반환합니다.
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
