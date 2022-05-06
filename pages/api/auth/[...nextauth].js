import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import GithubProvider from "next-auth/providers/github";

export default (req, res) =>
    NextAuth(req, res, {
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
            }),
        ],
        adapter: MongoDBAdapter(clientPromise),
        debug: process.env.NODE_ENV === "development",
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        callbacks: {
            async redirect(url, baseUrl) {
                return "/";
            },
        },
    });
