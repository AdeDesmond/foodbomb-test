import NextAuth from "next-auth";
import type { Provider } from "@auth/core/providers";
import GitHub from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./mongoconnect/mongo-adapter-client";
import { connectDB } from "./mongoconnect/db-connect";
// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing github oauth credentials ");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHub({
      id: "github",
      name: "GitHub",
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ] as Provider[],

  callbacks: {
    //usually not needed, here we are fixing a bug in the nextauth
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
