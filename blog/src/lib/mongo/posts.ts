import clientPromise from '@/lib/mongo/index';
import { Collection, Db } from 'mongodb';

let client;
let db: Db;
let posts: Collection;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db('posts');
    posts = await db.collection('slug');
  } catch (error) {
    throw new Error('Failed to stablish connection to database');
  }
}

(async () => {
  await init();
})();

export async function getPosts(slug: string) {
  try {
    if (!posts) await init();
    const result = await posts.findOne({ _slug: slug });
    return { viewCount: result?.viewCount || 0 };
  } catch (e) {
    return { error: 'Failed to fetch posts!' };
  }
}
