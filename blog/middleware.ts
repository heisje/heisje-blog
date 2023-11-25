// import * as mongo from 'mongodb';
// import { NextApiRequest } from 'next';
// import { NextRequest, NextResponse } from 'next/server';
//
// const MONGO_URI = process.env.DB_URL || '';
//
// interface Database {
//   client?: mongo.MongoClient;
// }
//
// export interface DatabaseRequest extends NextApiRequest {
//   db: Database;
// }
//
// const connectDB = (async function () {
//   console.log(`Start connecting to mongodb...`);
//   const mongoClient: mongo.MongoClient = new mongo.MongoClient(MONGO_URI, {
//     connectTimeoutMS: 5000,
//   });
//   const client = await mongoClient.connect();
//   const database: mongo.Db = client.db('posts');
//   const collection = database.collection('slug');
//   // await createIndexes(database); // optional
//   return {
//     client,
//   };
// })();
//
// export default function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/posts' || request.nextUrl.pathname === '/posts/pages') {
//     return NextResponse.rewrite(new URL(`/posts/pages/1`, request.url));
//   }
// }
