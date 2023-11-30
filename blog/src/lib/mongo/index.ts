import { MongoClient } from 'mongodb';

const URL = process.env.DB_URL;
const options = {};

if (!URL) throw new Error('Add Mongo URL');

let client: MongoClient = new MongoClient(URL, options);
let clientPromise: Promise<MongoClient>;

clientPromise = client.connect();

export default clientPromise;
