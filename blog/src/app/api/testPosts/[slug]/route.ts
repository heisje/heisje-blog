import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/mongo/posts';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  // 일반 조회
  try {
    const { viewCount, error } = await getPosts(params.slug);
    if (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }

    return NextResponse.json({ viewCount: viewCount });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
