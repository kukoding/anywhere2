import {MongoClient, ObjectId} from 'mongodb';
import {getSession} from "next-auth/react";

export default async function handler(req, res) {
    const session = await getSession({req});
    if (!session) {
        return res.status(401).json({
            error: "You must be sign in to view the protected content on this page.",
        });
    }

    const client = new MongoClient(process.env.DB_HOST_ATLAS);
    await client.connect();

    const db = client.db(process.env.DB_NAME_ATLAS);

    const result = await db.collection('pdf').find({
        _id: new ObjectId(req.query.id)
    }).toArray();

    return res.status(200).json({
        cookies: req.cookies,
        query: req.query,
        body: req.body,
        method: req.method,
        pdf: result,
    });
}
