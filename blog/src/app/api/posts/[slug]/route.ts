import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const url = process.env.DB_URL || '';
  console.log(url);

  // 일반 조회
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('posts');
    const collection = db.collection('slug'); // 데이터베이스에서 'meetups' 라는 컬렉션을 가져온다. (없으면 생성한다.)

    // 조회수 조회
    const document = await db.collection('slug').findOne({ _slug: params.slug });

    await client.close();
    return NextResponse.json({ viewCount: document?.viewCount || 0 });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  const url = process.env.DB_URL || '';
  console.log(url);
  // 일반 조회
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('posts');
    const collection = db.collection('slug'); // 데이터베이스에서 'meetups' 라는 컬렉션을 가져온다. (없으면 생성한다.)

    // 조회수 증가
    const result = await collection.updateOne({ _slug: params.slug }, { $inc: { viewCount: 1 } }, { upsert: true });
    const document = await db.collection('slug').findOne({ _slug: params.slug });

    await client.close();
    return NextResponse.json({ viewCount: document?.viewCount || 0 });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
