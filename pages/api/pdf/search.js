import {MongoClient} from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.DB_HOST_ATLAS);
    await client.connect();

    const db = client.db(process.env.DB_NAME_ATLAS);

    const result = await db.collection('pdf').find({}).toArray();

    res.status(200).json({
        pdf: result,
    });
}
